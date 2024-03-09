
/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: [
    "plugin:monorepo/recommended",
    "turbo",
  ],
  plugins: ["monorepo"],
}
