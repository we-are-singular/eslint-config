export default [
  {
    input: 'main.js',
    external: ['deepmerge'],
    output: [
      { file: "./dist/main.cjs", format: 'cjs' },
      { file: "./dist/main.mjs", format: 'es' }
    ]
  }
];