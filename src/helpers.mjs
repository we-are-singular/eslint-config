export function findSpecFiles(paths = []) {
  return paths.map((path) => `${path}**/*.@(spec|test|unit).@(ts|tsx|js|jsx|mjs|cjs)`)
}

export function testFiles() {
  return [
    "**/*.{test,spec,unit}.{ts,tsx,js,jsx}",
    "**/tests/**/*.{ts,tsx,js,jsx}",
    "**/__tests__/**/*.{ts,tsx,js,jsx}",
    "**/test/**/*.{ts,tsx,js,jsx}",
    "**/*.test-d.ts", // for type testing files
  ]
}
