/**
 * Adds very strict variable naming rules.
 * @param {String[]} paths - The options object.
 * @param {String[]} names - More names to be added to the filter.
 * @returns {Object} - The ESLint configuration object.
 */
export default function (paths, names = []) {
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
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
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
            "Mock",
            "Decorator",
            // js
            "Class",
            "Schema",
            "Object",
            "Array",
            "Type",
            "Flag",
            "Props",
            "Options",
            // workers
            "Consumer",
            "Producer",
            "Worker",
            // trpc
            "Router",
            "Input",
            "Output",
            "Mutation",
            "Query",
            "Subscription",
            "Resolver",
            "Setup",
            // db
            "With",
            "Where",
            "DTO",
            "Seed",
            // custom
            ...names,
          ].filter(Boolean),
          format: ["PascalCase"],
        },
        {
          selector: "typeParameter",
          format: ["UPPER_CASE"],
        },
      ],
    },
    plugins: ["filenames-simple"],
  }
}
