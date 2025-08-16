import astroPlugin from "eslint-plugin-astro"
import astroParser from "astro-eslint-parser"
import tsParser from "@typescript-eslint/parser"
import ts from "typescript-eslint"

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...astroPlugin.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        project: null, // Disable TypeScript project for embedded scripts
      },
    },
    rules: {
      "prettier/prettier": "off",
      "react/no-unknown-property": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-undef": "off",
    },
  },

  // Configuration for embedded TypeScript/JavaScript scripts in Astro files
  {
    files: ["**/*.astro/*.ts", "**/*.astro/*.js"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: null,
        projectService: false, // Explicitly disable project service
      },
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    rules: {
      // Disable all type-aware rules for embedded scripts
      ...ts.configs.disableTypeChecked.rules,

      // Disable formatting and React rules
      "prettier/prettier": "off",
      "react/no-unknown-property": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-undef": "off",

      // Keep basic linting but disable problematic ones
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "off", // Allow console in scripts
    },
  },
]
