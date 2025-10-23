import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
// import { withZephyr } from "zephyr-rsbuild-plugin";
import { config } from "./module-federation.config";


export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3010
  },
  moduleFederation: {
    options: config,
  }
});
