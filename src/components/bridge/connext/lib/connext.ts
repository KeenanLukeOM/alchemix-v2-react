import { useAccount } from "wagmi";
import { toast } from "sonner";
import {
  encodeAbiParameters,
  formatEther,
  parseAbiParameters,
  parseEther,
  parseUnits,
} from "viem";
import { useMutation, useQuery } from "@tanstack/react-query";
import { arbitrum, mainnet, optimism } from "viem/chains";
import type { SdkConfig } from "@connext/sdk";

import { QueryKeys } from "@/lib/queries/queriesSchema";
import { useEthersSigner } from "@/hooks/useEthersSigner";
import { CONNEXT_GATEWAY_ADDRESSES } from "@/lib/config/bridge";
import { SYNTH_ASSETS_ADDRESSES } from "@/lib/config/synths";
import { isInputZero } from "@/utils/inputNotZero";
import {
  ALCX_ARBITRUM_ADDRESS,
  ALCX_MAINNET_ADDRESS,
  ALCX_OPTIMISM_ADDRESS,
} from "@/lib/constants";

const ETH_DOMAIN = 6648936;
const OPTIMISM_DOMAIN = 1869640809;
const ARBITRUM_DOMAIN = 1634886255;

export const bridgeChains = [mainnet, optimism, arbitrum];
export type SupportedBridgeChainIds = (typeof bridgeChains)[number]["id"];

export const chainIdToDomainMapping = {
  [mainnet.id]: "6648936",
  [optimism.id]: "1869640809",
  [arbitrum.id]: "1634886255",
} as const;

export const chainToAvailableTokensMapping = {
  [mainnet.id]: [
    ALCX_MAINNET_ADDRESS,
    SYNTH_ASSETS_ADDRESSES[mainnet.id].alETH,
    SYNTH_ASSETS_ADDRESSES[mainnet.id].alUSD,
  ].map((t) => t.toLowerCase() as `0x${string}`),

  [optimism.id]: [
    ALCX_OPTIMISM_ADDRESS,
    SYNTH_ASSETS_ADDRESSES[optimism.id].alETH,
    SYNTH_ASSETS_ADDRESSES[optimism.id].alUSD,
  ].map((t) => t.toLowerCase() as `0x${string}`),

  [arbitrum.id]: [
    ALCX_ARBITRUM_ADDRESS,
    SYNTH_ASSETS_ADDRESSES[arbitrum.id].alETH,
    SYNTH_ASSETS_ADDRESSES[arbitrum.id].alUSD,
  ].map((t) => t.toLowerCase() as `0x${string}`),
} as const;

type TargetMapping = Record<
  SupportedBridgeChainIds,
  Record<`0x${string}`, `0x${string}`>
>;

export const targetMapping: TargetMapping = {
  [mainnet.id]: {
    [ALCX_MAINNET_ADDRESS]: "0x0",
    [SYNTH_ASSETS_ADDRESSES[mainnet.id].alETH]: "0x0",
    [SYNTH_ASSETS_ADDRESSES[mainnet.id].alUSD]: "0x0",
  },
  [optimism.id]: {
    [ALCX_OPTIMISM_ADDRESS]: "0x0",
    [SYNTH_ASSETS_ADDRESSES[optimism.id].alETH]: "0x0",
    [SYNTH_ASSETS_ADDRESSES[optimism.id].alUSD]: "0x0",
  },
  [arbitrum.id]: {
    [ALCX_ARBITRUM_ADDRESS]: "0x0",
    [SYNTH_ASSETS_ADDRESSES[arbitrum.id].alETH]: "0x0",
    [SYNTH_ASSETS_ADDRESSES[arbitrum.id].alUSD]: "0x0",
  },
};

const sdkConfig = {
  network: "mainnet",
  chains: {
    [ETH_DOMAIN]: {
      chainId: 1,
      providers: ["https://ethereum-rpc.publicnode.com"],
    },
    [OPTIMISM_DOMAIN]: {
      chainId: 10,
      providers: ["https://optimism-rpc.publicnode.com"],
    },
    [ARBITRUM_DOMAIN]: {
      chainId: 42161,
      providers: ["https://arbitrum-one.publicnode.com"],
    },
  },
  logLevel: "silent",
} as const satisfies SdkConfig;

const useConnextSdk = () => {
  const { address } = useAccount();
  return useQuery({
    queryKey: [QueryKeys.ConnextSdk("init"), address],
    queryFn: async () => {
      const create = await import("@connext/sdk").then((mod) => mod.create);
      const sdk = await create({ ...sdkConfig, signerAddress: address });
      return sdk.sdkBase;
    },
    staleTime: Infinity,
  });
};

export const useConnextRelayerFee = ({
  originDomain,
  destinationDomain,
}: {
  originDomain: string;
  destinationDomain: string;
}) => {
  const { data: connextSdk } = useConnextSdk();
  return useQuery({
    queryKey: [
      QueryKeys.ConnextSdk("relayerFee"),
      connextSdk,
      originDomain,
      destinationDomain,
    ],
    queryFn: async () => {
      if (!connextSdk) throw new Error("SDK not ready");
      const relayerFeeBN = await connextSdk.estimateRelayerFee({
        originDomain,
        destinationDomain,
      });
      const relayerFee = formatEther(BigInt(relayerFeeBN.toString()));
      return relayerFee;
    },
    enabled: !!connextSdk,
    staleTime: Infinity,
  });
};

export const useConnextAmountOut = ({
  originDomain,
  destinationDomain,
  originTokenAddress,
  amount,
}: {
  originDomain: string;
  destinationDomain: string;
  originTokenAddress: string;
  amount: string;
}) => {
  const { data: connextSdk } = useConnextSdk();
  return useQuery({
    queryKey: [
      QueryKeys.ConnextSdk("amountOut"),
      connextSdk,
      originDomain,
      destinationDomain,
      originTokenAddress,
      amount,
    ],
    queryFn: async () => {
      if (!connextSdk) throw new Error("SDK not ready");
      const { amountReceived, routerFee } =
        await connextSdk.calculateAmountReceived(
          originDomain,
          destinationDomain,
          originTokenAddress,
          // uint256 in string
          parseEther(amount).toString(),
        );

      return {
        amountReceived: formatEther(BigInt(amountReceived.toString())),
        routerFee: formatEther(BigInt(routerFee.toString())),
      };
    },
    enabled: !!connextSdk && !isInputZero(amount),
  });
};

export const useConnextWriteBridge = () => {
  const { address } = useAccount();
  const signer = useEthersSigner();
  const { data: connextSdk } = useConnextSdk();
  return useMutation({
    mutationFn: async ({
      originDomain,
      destinationDomain,
      destinationChainId,
      originTokenAddress,
      amount,
      slippage,
      relayerFee,
    }: {
      originDomain: string;
      destinationDomain: string;
      destinationChainId: number;
      originTokenAddress: string;
      amount: string; // uint256 in string
      slippage: string; // in %
      relayerFee: string; // in wei
    }) => {
      if (!connextSdk) throw new Error("SDK not ready");
      if (!address) throw new Error("Not connected");
      if (!signer) throw new Error("Signer not ready");
      if (!relayerFee) throw new Error("Relayer fee not ready");

      const isFromEth = +originDomain === ETH_DOMAIN;
      const isToEth = +destinationDomain === ETH_DOMAIN;

      if (isFromEth) {
        // type guard
        if (
          destinationChainId !== optimism.id &&
          destinationChainId !== arbitrum.id
        ) {
          throw new Error("UNEXPECTED: Invalid bridge route.");
        }

        const gatewayAddress = CONNEXT_GATEWAY_ADDRESSES[destinationChainId];
        const bridgeTxParams = {
          origin: originDomain,
          destination: destinationDomain,
          to: gatewayAddress,
          asset: originTokenAddress,
          delegate: address,
          callData: encodeAbiParameters(parseAbiParameters("address"), [
            address,
          ]),
          amount: parseEther(amount).toString(),
          relayerFee: parseEther(relayerFee).toString(),
          slippage: parseUnits(slippage, 2).toString(), // BPS
        };
        const xcallTxReq = await connextSdk.xcall(bridgeTxParams);
        const xcallTx = await signer.sendTransaction(xcallTxReq);
        toast.promise(
          () =>
            new Promise((resolve, reject) =>
              xcallTx
                .wait()
                .then((receipt) => (receipt.status === 1 ? resolve : reject)),
            ),
          {
            loading: "Bridging...",
            success: "Bridge success!",
            error: "Bridge failed.",
          },
        );
        await xcallTx.wait();
        return;
      }

      if (isToEth) {
        // TODO: implement bridge from L2 to L1
        return;
      }

      // L2 to L2
    },
  });
};
