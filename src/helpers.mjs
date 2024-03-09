export function findSpecFiles(paths = []) {
  return paths.map((path) => `${path}**/*.@(spec|test|unit).@(ts|tsx|js|jsx|mjs|cjs)`)
}
