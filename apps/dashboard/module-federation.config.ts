import type { ModuleFederationConfig } from "@rsbuild/core";

export const config: ModuleFederationConfig["options"] = {
  name: "dashboard",
  remotes: {
    flight_board: "flight_board@http://localhost:3001/remoteEntry.js",
    passenger_services:
      "passenger_services@http://localhost:3002/remoteEntry.js"
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
    "react-dom": { singleton: true, eager: true, requiredVersion: "^19.0.0" }
  }
};
