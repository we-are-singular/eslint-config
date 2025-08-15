import astroPlugin from "eslint-plugin-astro"
import astroParser from "astro-eslint-parser"
import tsParser from "@typescript-eslint/parser"

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
        project: null, // Disable project for performance
      },
    },
    rules: {
      "prettier/prettier": "off",
      "react/no-unknown-property": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-undef": "off",
    },
    settings: {
      linterOptions: {
        globals: {
          astroHTML: true,
        },
      },
    },
  },
  // Recommended: Disable rules and set env/parserOptions for embedded scripts in .astro files for performance
  {
    files: ["**/*.astro/*.js", "*.astro/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      "prettier/prettier": "off",
      // Add any other rules you want to disable for embedded JS scripts
    },
  },
  {
    files: ["**/*.astro/*.ts", "*.astro/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
      parser: tsParser,
      parserOptions: {
        project: null, // Disable project for performance
      },
    },
    rules: {
      "prettier/prettier": "off",
      // Add any other rules you want to disable for embedded TS scripts
    },
  },
]
