import merge from "deepmerge"

import markdownConfig from "./src/configs/markdown.mjs"
import monorepoConfig from "./src/configs/monorepo.mjs"
import nextjsConfig from "./src/configs/nextjs.mjs"
import prettierConfig from "./src/configs/prettier.mjs"
import reactConfig from "./src/configs/react.mjs"
import storybookConfig from "./src/configs/storybook.mjs"
import typescriptConfig from "./src/configs/typescript.mjs"
import astroConfig from "./src/configs/astro.mjs"

// eslint presets
const presets = {
  markdown: markdownConfig,
  monorepo: monorepoConfig,
  nextjs: nextjsConfig,
  prettier: prettierConfig,
  react: reactConfig,
  storybook: storybookConfig,
  typescript: typescriptConfig,
  astro: astroConfig,
}

presets.all = merge.all(Object.values(presets))

import vitestNode from "./src/overrides/vitest-node.mjs"
import vitestReact from "./src/overrides/vitest-react.mjs"
import namingConvention from "./src/overrides/naming-convention.mjs"
import fileNamingConvention from "./src/overrides/file-naming-convention.mjs"
// override functions
const overrides = {
  vitestNode,
  vitestReact,
  namingConvention,
  fileNamingConvention,
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

function extend(...args) {
  return config(presets.all, ...args)
}

export default { presets, overrides, config, extend }
