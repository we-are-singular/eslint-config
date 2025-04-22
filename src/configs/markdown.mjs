import markdownPlugin from 'eslint-plugin-markdown';

export default [
    {
        plugins: {
            // @ts-ignore
            markdown: markdownPlugin
        }
    },
    {
        files: ["**/*.md"],
        processor: "markdown/markdown"
    },
    {
      files: ['**/*.md/*'],
        rules: {
          'no-undef': 'off',
          'no-unused-vars': 'off',
            "no-console": "off",
            "import/no-unresolved": "off"
        }
    }
]