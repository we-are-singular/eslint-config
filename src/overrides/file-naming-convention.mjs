/**
 * Adds very strict file naming rule for backend code.
 * @param {String[]} paths - The options object.
 * @param {Object} rules - The rules object to be merged.
 * @returns {Object} - The ESLint configuration object.
 */
export default function (paths, rules = {}) {
  return {
    files: paths,
    rules: {
      "filename-rules/match": [2, /^([a-z]+-)*[a-z]+(?:\..*)?$/],
      "filename-rules/not-match": [2, "PascalCase"],
      ...rules,
    },
    plugins: ["filename-rules"],
  }
}
