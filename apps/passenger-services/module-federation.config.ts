import { createModuleFederationConfig } from "@module-federation/enhanced";
export const config = createModuleFederationConfig({
  name: "passenger_services",
  filename: "remoteEntry.js",
  exposes: {
    "./PassengerServicesApp": "./src/App.tsx"
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
    "react-dom": { singleton: true, eager: true, requiredVersion: "^19.0.0" }
  }
});
