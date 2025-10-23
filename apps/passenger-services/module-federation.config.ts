import type { ModuleFederationPluginOptions } from "@rspack/core";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "passenger_services",
  filename: "remoteEntry.js",
  exposes: {
    "./PassengerServicesApp": "./src/App.tsx"
  },
  shared: ["react", "react-dom"]
};
