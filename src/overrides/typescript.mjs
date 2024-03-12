import merge from "deepmerge"

/**
 * Returns the ESLint configuration for testing in libraries that use node/browser globals.
 * @param {String[]} paths - The options object.
 * @param {Omit<import('eslint').Linter.ConfigOverride, "files">} config - The rules object to be merged.
 * @returns {Object} - The ESLint override object.
 */
export default function (paths, config = {}) {
  return {
    files: paths,
    ...merge(
      {
        extends: [],
        parser: "@typescript-eslint/parser",
        parserOptions: {
          project: true,
        },
      },
      config
    ),
  }
}
