import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "no-extra-boolean-cast": "error",
      "no-useless-catch": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-with": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "no-const-assign": "error",
      "no-constant-condition": "error",
      "no-empty-pattern": "error",
      "no-inner-declarations": "error",
      "no-self-assign": "error",
      "no-unreachable": "error",
      "use-isnan": "error",
      "no-delete-var": "error",
      "no-var": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-numeric-literals": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-ex-assign": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-import-assign": "error",
      "no-obj-calls": "error",
      "no-redeclare": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-undef": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unused-labels": "error",
      "no-useless-escape": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "valid-typeof": "error",

      // Additional rules to emulate Biome
      "no-console": "warn",
      "no-alert": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-proto": "error",
      "no-return-await": "error",
      "no-self-compare": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "require-await": "error",
      yoda: "error",
      "prefer-object-spread": "error",
      "object-shorthand": "error",
      "no-array-constructor": "error",
      "no-new-object": "error",
      "prefer-destructuring": ["error", { object: true, array: false }],
    },
  },
  eslintConfigPrettier,
];
