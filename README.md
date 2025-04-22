# @we-are-singular/eslint-config

[![npm version](https://badge.fury.io/js/%40we-are-singular%2Feslint-config.svg)](https://badge.fury.io/js/%40we-are-singular%2Feslint-config)

This package provides a shared ESLint configuration for Singular projects, using ESLint 9's flat config format. (for eslint8 check out version 2.X)

## Installation

```bash
npm install --save-dev @we-are-singular/eslint-config
```

## Usage

This package now uses ESLint 9's flat config format. The old `.eslintrc.js` format and legacy helpers like `config()` and `extend()` have been removed in favor of the new flat config approach.

### `presets`

Collection of ESLint config arrays for different technologies:

- `astro` - Configuration for Astro projects
- `markdown` - Configuration for Markdown files
- `monorepo` - Configuration for monorepo projects
- `prettier` - Prettier integration
- `react` - React-specific rules
- `storybook` - Storybook configuration
- `typescript` - TypeScript configuration
- `yaml` - YAML file configuration

### `overrides`

Override functions that generate config objects for specific use cases:

- `vitestNode(patterns)` - Vitest configuration for Node.js tests
- `vitestReact(patterns)` - Vitest configuration for React tests
- `namingConvention(options)` - Naming convention rules
- `fileNamingConvention(options)` - File naming convention rules

## Example with Flat Config

```javascript
// eslint.config.js

import { presets, overrides } from "@we-are-singular/eslint-config"

export default [
  // Apply presets
  ...presets.typescript,
  ...presets.react,
  
  // Add custom rules
  {
    rules: {
      "no-console": "warn",
    },
  },
  
  // Apply overrides for specific file patterns
  overrides.vitestNode(["apps/backend/test/", "packages/logger/test/"]),

  // Custom override
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    rules: {
      "no-console": "off",
    },
  },
]
```

## Migration from ESLint 8

If you're migrating from the previous version that used ESLint 8:

1. **Update your config file**: Replace `.eslintrc.js` with `eslint.config.js`
2. **Remove legacy helpers**: The `config()`, `extend()`, and `.all` preset have been removed
3. **Use flat config format**: Import presets and overrides directly and spread them into your config array
4. **Update file patterns**: Flat configs use different glob patterns (use `**` for recursive matching)

### Before (ESLint 8)
```javascript
// .eslintrc.js
const { extend, overrides } = require("@we-are-singular/eslint-config")

module.exports = extend({
  rules: { "no-console": "warn" },
  overrides: [overrides.vitestNode(["apps/backend"])],
})
```

### After (ESLint 9)
```javascript
// eslint.config.js
import { presets, overrides } from "@we-are-singular/eslint-config"

export default [
  ...presets.typescript,
  ...presets.react,
  { rules: { "no-console": "warn" } },
  overrides.vitestNode(["apps/backend/**"]),
]
```
# Releasing a new version

To release a new version, you need to have access to the `@we-are-singular` npm organization.

1. Make sure you are logged in to the `@we-are-singular` npm organization by running `npm login` and following the instructions.
2. Run `npm run release` to trigger the release process.
3. Follow the instructions and make sure to select the correct version type.
4. The release will be published to npm and github automatically.
