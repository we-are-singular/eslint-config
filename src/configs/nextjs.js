
/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: [
    "next",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  plugins: ["monorepo", "react", "prettier", "@typescript-eslint"],
  env: {
    node: true,
  },
}
