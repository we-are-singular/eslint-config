
/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "import/no-anonymous-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        //
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_|^key$",
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-array-constructor": "off",
  },
  plugins: ["@typescript-eslint"],
}
