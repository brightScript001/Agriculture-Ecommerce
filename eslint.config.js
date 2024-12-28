import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import path from "path";

export default [
  {
    ignores: ["dist"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["react-hooks", "react-refresh", "@typescript-eslint", "import"],
    extends: [
      js.configs.recommended,
      "plugin:@typescript-eslint/recommended",
      "eslint:recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
    ],
    settings: {
      "import/resolver": {
        typescript: {
          project: path.resolve(__dirname, "./tsconfig.json"),
        },
      },
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/no-unresolved": "error",
      "import/extensions": "off",
    },
  },
];
