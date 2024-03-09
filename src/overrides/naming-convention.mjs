/**
 * Adds very strict variable naming rules.
 * @param {String[]} paths - The options object.
 * @returns {Object} - The ESLint configuration object.
 */
export default function (paths) {
  return {
    files: paths,
    rules: {
      camelcase: "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"],
          filter: {
            // you can expand this regex to add more allowed names
            regex: "^(Hashids)$",
            match: false,
          },
        },

        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "enumMember",
          format: ["UPPER_CASE", "PascalCase"],
        },
        {
          selector: "memberLike",
          modifiers: ["private"],
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "objectLiteralProperty",
          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          // add more suffixes here as we define the rest of the types
          suffix: [
            // nestjs
            "App",
            "Server",
            "Client",
            "Controller",
            "Model",
            "Module",
            "Service",
            "Helper",
            "Middleware",
            "Interface",
            "Abstract",
            "Pipe",
            "Filter",
            "Guard",
            "Interceptor",
            "Exception",
            "Context",
            "Factory",
            "Provider",
            "Repository",
            "Entity",
            "Subscriber",
            "Strategy",
            "Type",
            "Mock",
            // workers
            "Consumer",
            "Producer",
            // trpc
            "Router",
            "Input",
            "Output",
            "Mutation",
            "Query",
            "Subscription",
            "Resolver",
            // db
            "With",
            "Where",
            "Setup",
            "DTO",
            "Seed",
            // custom
            "Decorator",
          ],
          format: ["PascalCase"],
        },
        {
          selector: "typeParameter",
          format: ["UPPER_CASE"],
        },
      ],
      "filenames-simple/naming-convention": ["error", { rule: "kebab-case" }],
    },
    plugins: ["filenames-simple"],
  }
}
