/**
 * Adds very strict variable naming rules.
 * @param {String[]} paths - The options object.
 * @param {Object} rules - The rules object to be merged.
 * @returns {Object} - The ESLint configuration object.
 */
export default function (paths, rules = {}) {
  return {
    files: paths,
    rules: {
      "filenames-simple/naming-convention": ["error", { rule: "kebab-case" }],
      "filenames-simple/named-export": ["error", "singular"],
      ...rules,
    },
    plugins: ["filenames-simple"],
  }
}
