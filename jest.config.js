module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "collectCoverage": true,
  // "collectCoverageFrom": [
  //   "**/*.{js,jsx,ts,tsx}",
  //   "!**/node_modules/**",
  //   "!**/dist/**"
  // ],
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 0,
  //     "functions": 0,
  //     "lines": 0,
  //     "statements": 0
  //   }
  // }
}