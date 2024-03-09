export default [
  {
    input: "main.mjs",
    external: ["deepmerge"],
    output: [
      { file: "./dist/main.cjs", format: "cjs" },
      { file: "./dist/main.mjs", format: "es" },
    ],
  },
]
