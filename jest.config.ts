export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  passWithNoTests: true,
  setupFilesAfterEnv: ["jest-extended/all"],
};
