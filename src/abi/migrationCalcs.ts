export const migrationCalcsAbi = [
  {
    inputs: [
      {
        components: [
          { internalType: "bool", name: "stakeBpt", type: "bool" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "slippage", type: "uint256" },
          {
            internalType: "contract IUniswapV2Pair",
            name: "poolToken",
            type: "address",
          },
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
          {
            internalType: "contract AggregatorV3Interface",
            name: "wethPriceFeed",
            type: "address",
          },
          {
            internalType: "contract AggregatorV3Interface",
            name: "tokenPriceFeed",
            type: "address",
          },
        ],
        internalType: "struct IMigrationCalcs.MigrationCalcParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "getMigrationParams",
    outputs: [
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
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
