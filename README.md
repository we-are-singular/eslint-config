# @we-are-singular/eslint-config

[![npm version](https://badge.fury.io/js/%40we-are-singular%2Feslint-config.svg)](https://badge.fury.io/js/%40we-are-singular%2Feslint-config)

This package provides a shared ESLint configuration for Singular projects.

## Installation

```bash
npm install --save-dev @we-are-singular/eslint-config
```

## Usage

### `config()`

This function is used to create an ESLint configuration object. it just deeply merges the provided arguments.

### `extend()`

This function is used to create an ESLint configuration object. it extends the presets.all configuration and merge the provided arguments.

### `presets`

list of presets that can be used to create an ESLint configuration object.

### `overrides`

list of override factories that can be used to create an ESLint overwrite rule.

## Example

```javascript
// .eslintrc.js

const { config, overrides, presets } = require("@we-are-singular/eslint-config")

module.exports = config(
  // some presets
  presets.react,
  presets.typescript,
  // your rules
  {
    rules: {
      "no-console": "warn",
    },
    overrides: [
      // some overrides
      overrides.vitestNode(["apps/backend", "packages/logger"]),

      // your rules
      {
        files: ["*.test.ts", "*.test.tsx"],
        rules: {
          "no-console": "off",
        },
      },
    ],
  }
)
```

## Example using extend()

```javascript
// .eslintrc.js

const { extend, overrides } = require("@we-are-singular/eslint-config")

module.exports = extend({
  rules: {
    "no-console": "warn",
  },
  overrides: [
    // some overrides
    overrides.vitestNode(["apps/backend", "packages/logger"]),

    // your rules
    {
      files: ["*.test.ts", "*.test.tsx"],
      rules: {
        "no-console": "off",
      },
    },
  ],
})
```

## Example as ESLint preset

```javascript
// .eslintrc.js

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@we-are-singular/eslint-config/all"],
  overrides: [
    // your rules
    {
      files: ["*.test.ts", "*.test.tsx"],
      rules: {
        "no-console": "off",
      },
    },
  ],
}
```

# Releasing a new version

To release a new version, you need to have access to the `@we-are-singular` npm organization.

1. Make sure you are logged in to the `@we-are-singular` npm organization by running `npm login` and following the instructions.
2. Run `npm run release` to trigger the release process.
3. Follow the instructions and make sure to select the correct version type.
4. The release will be published to npm and github automatically.
