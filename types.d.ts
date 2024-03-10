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
  all: Linter.Config
}

export const overrides: {
  vitestNode: (paths: string[]) => Linter.ConfigOverride<OverrideRules>
  vitestReact: (paths: string[]) => Linter.ConfigOverride<OverrideRules>
  namingConvention: (paths: string[], names: string[]) => Linter.ConfigOverride<OverrideRules>
  fileNamingConvention: (paths: string[], rules: object) => Linter.ConfigOverride<OverrideRules>
}
