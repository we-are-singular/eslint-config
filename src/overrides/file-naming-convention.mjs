/**
 * Adds very strict file naming rule for backend code.
 * @param {String[]} paths - The options object.
 * @param {Object} rules - The rules object to be merged.
 * @returns {Object} - The ESLint configuration object.
 */
import filenameRulesPluginRules from "eslint-plugin-filename-rules"

export default function (paths, rules = {}) {
  // Create a proper plugin object for ESLint 9 flat config
  const filenameRulesPlugin = {
    rules: filenameRulesPluginRules.rules,
  }

  return {
    files: paths,
    plugins: {
      "filename-rules": filenameRulesPlugin,
    },
    rules: {
      "filename-rules/match": ["error", "^([a-z]+-)*[a-z]+(?:\\..*)?$"],
      "filename-rules/not-match": ["error", "PascalCase"],
      ...rules,
    },
  }
}
