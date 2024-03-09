import virtual from "@rollup/plugin-virtual"
import prettier from "rollup-plugin-prettier"

export default [
  {
    input: "main.mjs",
    external: ["deepmerge"],
    output: [
      { file: "./dist/main.cjs", format: "cjs" },
      { file: "./dist/main.mjs", format: "es" },
    ],
  },
  {
    input: "all",
    output: {
      file: "./all.js",
      format: "cjs",
    },
    plugins: [
      virtual({
        all:
          "module.exports = " +
          JSON.stringify((await import("./dist/main.mjs")).default.presets.all, null, 2),
      }),
      prettier({
        parser: "babel",
        filepath: "all.js",
        arrowParens: "always",
        useTabs: false,
        printWidth: 100,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "es5",
        semi: false,
      }),
    ],
  },
]
