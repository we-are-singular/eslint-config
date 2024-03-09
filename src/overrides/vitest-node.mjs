import { findSpecFiles } from "../helpers.mjs"

/**
 * Returns the ESLint configuration for testing in libraries that use node/browser globals.
 * @param {String[]} paths - The options object.
 * @returns {Object} - The ESLint configuration object.
 */
export default function (paths) {
  return {
    // tests in libraries that use node/browser globals
    extends: ["plugin:vitest-globals/recommended"],
    files: findSpecFiles(paths),
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "monorepo/no-internal-import": "off",
    },
    plugins: ["vitest", "vitest-globals"],
    env: {
      "vitest-globals/env": true,
    },
  }
}
