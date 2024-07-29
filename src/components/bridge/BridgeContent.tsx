import { ConnextBridge } from "./connext/ConnextBridge";
import { LiFiBridgeWidget } from "./lifi/LiFiBridgeWidget";

export const BridgeContent = () => {
  return (
    <div className="space-y-5">
      <ConnextBridge />
      <LiFiBridgeWidget />
    </div>
  );
};
