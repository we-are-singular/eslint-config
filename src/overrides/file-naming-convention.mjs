/**
 * Adds very strict file naming rule for backend code.
 * @param {String[]} paths - The options object.
 * @param {Object} rules - The rules object to be merged.
 * @returns {Object} - The ESLint configuration object.
 */

// Custom filename validation rule that's ESLint 9 compatible
const filenameRulePlugin = {
  rules: {
    match: {
      meta: {
        type: "layout",
        docs: {
          description: "checks that filenames match a chosen pattern",
        },
        fixable: false,
        schema: [
          {
            type: "string",
          },
        ],
        messages: {
          noMatch: "Filename '{{name}}' does not match the required pattern.",
        },
      },
      create: (context) => ({
        Program: (node) => {
          const filename = context.getFilename()
          const basename = filename.split("/").pop() || filename

          // Custom regex pattern
          const pattern = /^([a-z]+-)*[a-z]+(?:\..*)?$/

          if (!pattern.test(basename)) {
            context.report({
              node,
              messageId: "noMatch",
              data: {
                name: basename,
              },
            })
          }
        },
      }),
    },
    "not-match": {
      meta: {
        type: "layout",
        docs: {
          description: "checks that filenames do not match a chosen pattern",
        },
        fixable: false,
        schema: [
          {
            type: "string",
          },
        ],
        messages: {
          match: "Filename '{{name}}' must not use PascalCase.",
        },
      },
      create: (context) => ({
        Program: (node) => {
          const filename = context.getFilename()
          const basename = filename.split("/").pop() || filename
          const nameWithoutExt = basename.replace(/\.[^/.]+$/, "")

          // Check for PascalCase
          const pascalCasePattern = /^[A-Z][a-zA-Z0-9]*$/

          if (pascalCasePattern.test(nameWithoutExt)) {
            context.report({
              node,
              messageId: "match",
              data: {
                name: basename,
              },
            })
          }
        },
      }),
    },
  },
}

export default function (paths, rules = {}) {
  return {
    files: paths,
    plugins: {
      "filename-rules": filenameRulePlugin,
    },
    rules: {
      "filename-rules/match": "error",
      "filename-rules/not-match": "error",
      ...rules,
    },
  }
}
