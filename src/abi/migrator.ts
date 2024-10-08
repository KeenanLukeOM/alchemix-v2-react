export const migratorAbi = [
  {
    inputs: [
      { internalType: "address", name: "wethAddress", type: "address" },
      {
        internalType: "address",
        name: "balancerVaultAddress",
        type: "address",
      },
      { internalType: "address", name: "routerAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "poolToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "balancerPoolToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balancerPoolTokenAmount",
        type: "uint256",
      },
      { indexed: false, internalType: "bool", name: "staked", type: "bool" },
    ],
    name: "Migrated",
    type: "event",
  },
  {
    inputs: [],
    name: "balancerVault",
    outputs: [{ internalType: "contract IVault", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      { internalType: "contract IUniswapV2Factory", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IBasePool",
            name: "balancerPoolToken",
            type: "address",
          },
          {
            internalType: "contract IRewardPool4626",
            name: "auraPool",
            type: "address",
          },
          { internalType: "uint256", name: "poolTokensIn", type: "uint256" },
          {
            internalType: "uint256",
            name: "amountCompanionMinimumOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountWETHMinimumOut",
            type: "uint256",
          },
          { internalType: "uint256", name: "wethRequired", type: "uint256" },
          {
            internalType: "uint256",
            name: "minAmountTokenOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountBalancerLiquidityOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountAuraSharesMinimum",
            type: "uint256",
          },
          { internalType: "bool", name: "stake", type: "bool" },
        ],
        internalType: "struct IMigrator.MigrationParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [{ internalType: "contract WETH", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
] as const;
