import type { Linter, ConfigOverride, OverrideRules } from "eslint"

export function config(...args: Array<Partial<Linter.Config>>): Linter.Config

export const presets: {
  markdown: Linter.Config
  monorepo: Linter.Config
  nextjs: Linter.Config
  prettier: Linter.Config
  react: Linter.Config
  storybook: Linter.Config
  typescript: Linter.Config
  all: Linter.Config
}

export const overrides: {
  vitestNode: (paths: string[]) => Linter.ConfigOverride<OverrideRules>
  vitestReact: (paths: string[]) => Linter.ConfigOverride<OverrideRules>
  namingConvention: (paths: string[]) => Linter.ConfigOverride<OverrideRules>
}
