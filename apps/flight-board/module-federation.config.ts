import type { ModuleFederationPluginOptions } from "@rspack/core";
export const mfConfig: ModuleFederationPluginOptions = {
  name: "flight_board",
  filename: "remoteEntry.js",
  exposes: {
    "./FlightBoardApp": "./src/App.tsx"
  },
  shared: ["react", "react-dom"]
};
