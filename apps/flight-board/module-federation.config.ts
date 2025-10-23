import { createModuleFederationConfig } from "@module-federation/enhanced";

export const config = createModuleFederationConfig({
  name: "flight_board",
  filename: "remoteEntry.js",
  exposes: {
    "./FlightBoardApp": "./src/App.tsx"
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
    "react-dom": { singleton: true, eager: true, requiredVersion: "^19.0.0" }
  }
});
