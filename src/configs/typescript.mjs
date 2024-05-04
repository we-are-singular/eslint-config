/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["*.js", "*.mjs", "*.cjs", "*.jsx", "*.ts", "*.tsx", "*.d.ts"],
      rules: {
        // disable non-typescript rules
        "import/no-anonymous-default-export": "off",
        "no-unused-vars": "off",
        "no-empty-function": "off",
        "no-implied-eval": "off",
        "dot-notation": "off",
        "require-await": "off",
        "prefer-promise-reject-errors": "off",
        "no-throw-literal": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      extends: ["plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
      rules: {
        // off
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-array-constructor": "off",
        // error
        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
        "@typescript-eslint/dot-notation": ["error", { allowIndexSignaturePropertyAccess: true }],
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unsafe-enum-comparison": "error",
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-implied-eval": "error",

        // warn
        "@typescript-eslint/ban-tslint-comment": "warn",
        "@typescript-eslint/triple-slash-reference": "warn",
        "@typescript-eslint/prefer-promise-reject-errors": "warn",
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/restrict-plus-operands": "warn",
        "@typescript-eslint/no-for-in-array": "warn",
        "@typescript-eslint/no-useless-template-literals": "warn",
        "@typescript-eslint/no-misused-promises": "warn",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-confusing-non-null-assertion": "warn",
        "@typescript-eslint/no-redundant-type-constituents": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            //
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_|^key$",
          },
        ],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
}
