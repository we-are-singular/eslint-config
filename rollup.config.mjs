export default [
  {
    input: "main.mjs",
    external: ["deepmerge"],
    output: [
      { 
        file: "./dist/main.cjs", 
        format: "cjs",
        exports: "named"
      },
      { file: "./dist/main.mjs", format: "es" },
    ],
  },
]
