import { importX } from "eslint-plugin-import-x"

/**
 * @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigFile}
 */
export default [
  //
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
]
