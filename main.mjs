// main.mjs
import markdownConfig from "./src/configs/markdown.mjs"
import monorepoConfig from "./src/configs/monorepo.mjs"
import prettierConfig from "./src/configs/prettier.mjs"
import reactConfig from "./src/configs/react.mjs"
import storybookConfig from "./src/configs/storybook.mjs"
import typescriptConfig from "./src/configs/typescript.mjs"
import astroConfig from "./src/configs/astro.mjs"
import yamlConfig from "./src/configs/yaml.mjs"

// eslint presets
const presets = {
  markdown: markdownConfig,
  monorepo: monorepoConfig,
  prettier: prettierConfig,
  react: reactConfig,
  storybook: storybookConfig,
  typescript: typescriptConfig,
  astro: astroConfig,
  yaml: yamlConfig,
}

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


// Named exports for ESM compatibility
export { presets, overrides }

// Default export for CommonJS compatibility
export default { presets, overrides }
