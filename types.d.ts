import type { Linter, OverrideRules } from "eslint"

export function config(...args: Array<Partial<Linter.Config>>): Linter.Config
export function extend(...args: Array<Partial<Linter.Config>>): Linter.Config

export const presets: {
  markdown: Linter.Config
  monorepo: Linter.Config
  nextjs: Linter.Config
  prettier: Linter.Config
  react: Linter.Config
  storybook: Linter.Config
  typescript: Linter.Config
  astro: Linter.Config
  yaml: Linter.Config
  all: Linter.Config
}

export const overrides: {
  vitestNode: (paths: string[]) => Linter.ConfigOverride<OverrideRules>
  vitestReact: (paths: string[]) => Linter.ConfigOverride<OverrideRules>
  namingConvention: (
    paths: string[],
    names?: string[],
    overrides: Record<string, string[]>
  ) => Linter.ConfigOverride<OverrideRules>
  fileNamingConvention: (
    paths: string[],
    rules?: Linter.RulesRecord
  ) => Linter.ConfigOverride<OverrideRules>
  typescript: (
    paths: string[],
    config: Omit<Linter.ConfigOverride, "files">
  ) => Linter.ConfigOverride<OverrideRules>
}

// Default export (for CommonJS compatibility and default imports)
declare const _default: {
  presets: typeof presets
  overrides: typeof overrides
  config: typeof config
  extend: typeof extend
}

export default _default
