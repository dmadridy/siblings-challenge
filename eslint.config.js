import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-console": "error",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "no-duplicate-imports": "error",
      eqeqeq: "error",
      "consistent-return": "error",
      "func-style": ["error", "declaration"],
    },
  },
  eslintConfigPrettier,
];
