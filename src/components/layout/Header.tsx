import { Link } from "@tanstack/react-router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ToOptions } from "@tanstack/react-router";
import { IS_TENDERLY_FORK } from "@/lib/wagmi/tenderly";

export const routeTitleToPathMapping = {
  Vaults: {
    to: "/vaults",
    icon: "/alchemix-v2-react/images/icons/vaults_med.svg",
  },
  Transmuters: {
    to: "/transmuters",
    icon: "/alchemix-v2-react/images/icons/transmuter_med.svg",
  },
  Bridge: {
    to: "/bridge",
    icon: "/alchemix-v2-react/images/icons/swap_med.svg",
  },
  Farms: { to: "/farms", icon: "/alchemix-v2-react/images/icons/farm_med.svg" },
  Governance: {
    to: "/governance",
    icon: "/alchemix-v2-react/images/icons/alcx_med.svg",
  },
  Utilities: {
    to: "/utilities",
    icon: "/alchemix-v2-react/images/icons/utilities_med.svg",
  },
} as const satisfies Record<string, { to: ToOptions["to"]; icon: string }>;

export type RouteTitle = keyof typeof routeTitleToPathMapping;

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-grey5inverse bg-grey30inverse p-4 md:pb-5 md:pl-8 md:pt-5 dark:border-grey5 dark:bg-grey30">
      <div className="text-center">
        <Link to="/" className="flex items-center justify-center">
          <img
            src="/alchemix-v2-react/images/icons/ALCX_Std_logo.svg"
            className="h-11 invert dark:filter-none"
            alt="The Alchemix logo"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {IS_TENDERLY_FORK && (
          <Link to="/debug">
            <div className="border border-red1 bg-grey5inverse p-2 dark:bg-grey5">
              <p>FORK</p>
            </div>
          </Link>
        )}
        <ConnectButton
          accountStatus="address"
          chainStatus="icon"
          showBalance={{ smallScreen: false, largeScreen: true }}
        />
      </div>
    </header>
  );
}
