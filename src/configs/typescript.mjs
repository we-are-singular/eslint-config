/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      extends: ["plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
      rules: {
        "import/no-anonymous-default-export": "off",
        "no-unused-vars": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/no-confusing-non-null-assertion": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
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
    },
  ],
  parser: "@typescript-eslint/parser",
}
