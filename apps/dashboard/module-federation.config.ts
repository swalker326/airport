import type { ModuleFederationPluginOptions } from "@rspack/core";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "dashboard",
  filename: "remoteEntry.js",
  remotes: {
    flight_board: "flight_board@http://localhost:3001/remoteEntry.js",
    passenger_services:
      "passenger_services@http://localhost:3002/remoteEntry.js"
  },
  shared: ["react", "react-dom"]
};
