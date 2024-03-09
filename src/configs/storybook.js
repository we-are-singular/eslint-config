
/**
 * @type import('eslint').Linter.Config>
 */
export default {
  extends: [
    "plugin:mdx/recommended",
  ],
  overrides: [
    {
      // MDX stories
      files: ["*.mdx"],
      extends: ["plugin:mdx/recommended", "plugin:mdx/overrides"],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
          modules: true,
        },
      },
    },
    {
      // storybook stories
      files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      extends: ["plugin:storybook/recommended"],
      plugins: ["storybook"],
    },
  ],
}
