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
          selector: "import",
          format: ["PascalCase", "UPPER_CASE"],
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
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
          selector: "objectLiteralMethod",
          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          // ignore properties that require quotes
          selector: [
            "classProperty",
            "objectLiteralProperty",
            "typeProperty",
            "classMethod",
            "objectLiteralMethod",
            "typeMethod",
            "accessor",
            "enumMember",
          ],
          format: null,
          modifiers: ["requiresQuotes"],
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
            "Spy",
            "Decorator",
            // js
            "Function",
            "Class",
            "Schema",
            "Object",
            "Array",
            "Type",
            "Flag",
            "Props",
            "Options",
            "Config",
            "Settings",
            "Callback",
            "Promise",
            "Data",
            "Value",
            "Error",
            "Map",
            "Set",
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
  }
}
