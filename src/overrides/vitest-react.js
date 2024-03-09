import { findSpecFiles } from "../helpers";

/**
 * Returns the ESLint configuration for testing in libraries that use react/jest globals.
 * @param {String[]} paths - The options object.
 * @returns {Object} - The ESLint configuration object.
 */
export default function (paths) {
  return {
    // tests in libraries that use react
    files: findSpecFiles(paths),
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
    plugins: ["vitest", "vitest-globals", "jest-dom", "testing-library"],
    env: {
      jest: true,
      "vitest-globals/env": true,
    },
  }
}