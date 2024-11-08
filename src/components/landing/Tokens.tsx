const assets = [
  {
    name: "ETH",
    color: "#627EEA",
  },
  {
    name: "WSTETH",
    color: "#00A3FF",
  },
  {
    name: "RETH",
    color: "#ff0000",
  },
  {
    name: "DAI",
    color: "#f7b32b",
  },
  {
    name: "USDC",
    color: "#2775ca",
  },
  {
    name: "USDT",
    color: "#50af95",
  },
];

export const Tokens = () => {
  return (
    <div className="-mx-20 flex items-center overflow-x-clip">
      <div className="flex min-w-full items-center justify-between lg:animate-scroll lg:pl-36">
        {assets.map(({ name }) => (
          <div key={name} className="relative">
            <img
              alt={name}
              src={`./images/landing-page/${name.toLowerCase()}.png`}
              className="h-full w-full min-w-full"
            />
            {/* <div
              style={{
                background: color,
              }}
              className="absolute inset-0 -z-10 size-full"
            /> */}
          </div>
        ))}
      </div>
      <div className="hidden min-w-full animate-scroll items-center justify-between lg:flex lg:pl-36">
        {assets.map(({ name }) => (
          <div key={name} className="relative">
            <img
              alt={name}
              src={`./images/landing-page/${name.toLowerCase()}.png`}
              className="h-full w-full min-w-full"
            />
            {/* <div
              style={{
                background: color,
              }}
              className="absolute inset-0 -z-10 size-full rounded-full"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
