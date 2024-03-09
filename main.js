import merge from "deepmerge"

import markdownConfig from "./src/configs/markdown"
import monorepoConfig from "./src/configs/monorepo"
import nextjsConfig from "./src/configs/nextjs"
import prettierConfig from "./src/configs/prettier"
import reactConfig from "./src/configs/react"
import storybookConfig from "./src/configs/storybook"
import typescriptConfig from "./src/configs/typescript"
// eslint presets
const presets = {
  markdown: markdownConfig,
  monorepo: monorepoConfig,
  nextjs: nextjsConfig,
  prettier: prettierConfig,
  react: reactConfig,
  storybook: storybookConfig,
  typescript: typescriptConfig,
}

presets.all = merge.all([
  markdownConfig,
  monorepoConfig,
  nextjsConfig,
  prettierConfig,
  reactConfig,
  storybookConfig,
  typescriptConfig
])

import vitestNode from "./src/overrides/vitest-node"
import vitestReact from "./src/overrides/vitest-react"
import namingConvention from "./src/overrides/naming-convention"
// override functions
const overrides = {
  vitestNode,
  vitestReact,
  namingConvention,
}


/**
 * Configures the ESLint rules by merging multiple configurations.
 * @param {...Object} args - The configurations to be merged.
 * @returns {Object} - The merged configuration.
 * 
 * @type {(...args: Array<Partial<import('eslint').Linter.Config>> ) => Partial<import('eslint').Linter.Config>}
 */
function config(...args) {
  return merge.all(args)
}

export default {
  presets,
  overrides,
  config,
}

