import js from "@eslint/js"
import ts from "typescript-eslint"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import { testFiles } from "../helpers.mjs"

/**
 * TypeScript ESLint rules configuration
 * @type {import('eslint').Linter.RulesRecord}
 */
const RULES = {
  // Disable base rules that conflict with TypeScript equivalents
  "no-undef": "off",
  "no-redeclare": "off",
  "no-unused-vars": "off",
  "no-empty-function": "off",
  "no-implied-eval": "off",
  "dot-notation": "off",
  "require-await": "off",
  "prefer-promise-reject-errors": "off",
  "only-throw-error": "off",

  // TypeScript-specific rules
  "@typescript-eslint/no-redeclare": ["error", { ignoreDeclarationMerge: true }],
  "@typescript-eslint/require-await": "off",
  "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/no-array-constructor": "off",
  "@typescript-eslint/consistent-indexed-object-style": "error",
  "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
  "@typescript-eslint/dot-notation": ["error", { allowIndexSignaturePropertyAccess: true }],
  "@typescript-eslint/only-throw-error": "error",
  "@typescript-eslint/no-unnecessary-type-arguments": "error",
  "@typescript-eslint/no-unsafe-enum-comparison": "error",
  "@typescript-eslint/no-base-to-string": "error",
  "@typescript-eslint/no-implied-eval": "error",
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
  "@typescript-eslint/no-unnecessary-template-expression": "warn",
  "@typescript-eslint/no-misused-promises": "warn",
  "@typescript-eslint/no-floating-promises": "warn",
  "@typescript-eslint/no-empty-function": "warn",
  "@typescript-eslint/no-empty-interface": "warn",
  "@typescript-eslint/no-confusing-non-null-assertion": "warn",
  "@typescript-eslint/no-redundant-type-constituents": "warn",
  // more relaxed extra safety rules
  "@typescript-eslint/no-unused-expressions": "warn",
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  "@typescript-eslint/restrict-template-expressions": "off",
  "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
  "@typescript-eslint/no-constant-binary-expression": "off",
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      ignoreRestSiblings: true,
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_|^key$",
    },
  ],
}

/**
 * Test-specific ESLint rules configuration with relaxed restrictions
 * @type {import('eslint').Linter.RulesRecord}
 */
const TEST_RULES = {
  // Console and debugging
  "no-console": "off",
  "no-debugger": "warn", // allow debuggers but still warn

  // TypeScript strict rules - relaxed for testing
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/no-floating-promises": "off",
  "@typescript-eslint/no-misused-promises": "off",
  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-unused-vars": "off",
  "@typescript-eslint/unbound-method": "off",

  // Naming conventions - more flexible for tests
  "@typescript-eslint/naming-convention": "off",
  camelcase: "off",

  // Import rules - more flexible for test utilities
  "import/no-unresolved": "off",
  "import/no-extraneous-dependencies": "off",
  "import/no-anonymous-default-export": "off",

  // Function and variable rules
  "no-unused-vars": "off",
  "no-var": "off",
  "prefer-const": "warn", // still encourage const but not error
  "no-magic-numbers": "off",

  // Promise and async rules - more flexible for test scenarios
  "@typescript-eslint/require-await": "off",
  "@typescript-eslint/no-unnecessary-type-assertion": "off",
  "@typescript-eslint/prefer-promise-reject-errors": "off",

  // Object and type rules
  "@typescript-eslint/no-empty-interface": "off",
  "@typescript-eslint/consistent-type-definitions": "off",
  "@typescript-eslint/no-redundant-type-constituents": "off",

  // String and template rules
  "@typescript-eslint/no-unnecessary-template-expression": "off",
  "@typescript-eslint/prefer-string-starts-ends-with": "off",
  "@typescript-eslint/prefer-includes": "off",
}

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile}
 */
export default [
  // Base configs
  js.configs.recommended,
  // TypeScript-only configs
  ...ts.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.{ts,tsx}", " **/*.d.ts"],
    ignores: [...testFiles(), "**/*.astro/*.ts", "**/*.astro/*.js"],
    rules: RULES,
  })),

  // Test files configuration
  ...ts.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: testFiles(),
    rules: {
      ...RULES,
      ...TEST_RULES,
    },
  })),

  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.es2024,
        ...globals.node,
      },
    },
    rules: {
      "import-x/no-anonymous-default-export": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ["**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.es2024,
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
]
