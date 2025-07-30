import type { Linter } from "eslint"

export const presets: {
  markdown: Linter.Config[]
  monorepo: Linter.Config[]
  prettier: Linter.Config[]
  react: Linter.Config[]
  mdx: Linter.Config[]
  typescript: Linter.Config[]
  astro: Linter.Config[]
  yaml: Linter.Config[]
  importer: Linter.Config[]
  unicorn: Linter.Config[]
}

export const overrides: {
  vitestNode: (paths: string[]) => Linter.Config
  vitestReact: (paths: string[]) => Linter.Config
  namingConvention: (
    paths: string[],
    names?: string[],
    overrides?: Record<string, string[]>
  ) => Linter.Config
  fileNamingConvention: (paths: string[], rules?: Linter.RulesRecord) => Linter.Config
}

// Default export (for CommonJS compatibility and default imports)
declare const _default: {
  presets: typeof presets
  overrides: typeof overrides
}

export default _default
