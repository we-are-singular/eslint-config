import js from "@eslint/js"
import ts from "typescript-eslint"
import importPlugin from "eslint-plugin-import"

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile}
 */
export default [
  ...ts.config(
    //
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
      files: ["**/*.{ts,tsx}"],
      extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    }
  ),
  // TypeScript-only configs
  ...ts.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.{ts,tsx}", "**/*.d.ts"],
  })),
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["**/*.{ts,tsx}", "**/*.d.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      // Disable base rules that conflict with TypeScript equivalents
      "no-unused-vars": "off",
      "no-empty-function": "off",
      "no-implied-eval": "off",
      "dot-notation": "off",
      "require-await": "off",
      "prefer-promise-reject-errors": "off",
      "only-throw-error": "off",

      // TypeScript-specific rules
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
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_|^key$",
        },
      ],
    },
  },
  // for test files, some more lax rules
  {
    files: [
      "**/*.{test,spec,unit}.{ts,tsx,js,jsx}",
      "**/tests/**/*.{ts,tsx,js,jsx}",
      "**/__tests__/**/*.{ts,tsx,js,jsx}",
      "**/test/**/*.{ts,tsx,js,jsx}",
      "**/*.test-d.ts", // for type testing files
    ],
    rules: {
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
    },
  },
]
