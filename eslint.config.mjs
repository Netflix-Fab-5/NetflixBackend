import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      sourceType: "module", // Changed to module
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
];
