import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
  "semi": ["warn", "always"],
    "quotes": ["error", "double"],
     "no-unused-vars": "warn",
     "no-redeclare": "off",
    },
    languageOptions: { globals: globals.browser },
  },
]);
