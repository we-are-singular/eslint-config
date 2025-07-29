import importPlugin from "eslint-plugin-import"

/**
 * @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigFile}
 */
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    settings: {
      "import/ignore": ["node_modules", "@astrojs/*"],
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["./tsconfig.json", "./packages/*/tsconfig.json", "./apps/*/tsconfig.json"],
        },
        node: true,
      },
    },
  },
]
