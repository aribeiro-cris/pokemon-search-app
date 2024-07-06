module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['<rootDir>/.jest/jest.polyfills.js'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    testEnvironmentOptions: {
        customExportConditions: [''],
      }
}