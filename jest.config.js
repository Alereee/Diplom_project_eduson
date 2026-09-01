/** @type {import('jest').Config} */
const config = {
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};

module.exports = config;
