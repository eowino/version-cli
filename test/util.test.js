const util = require('../src/utilities');
const testNames = require('./testFileNames');

describe('Utility functions', () => {
  describe('getCurrentVersion()', () => {
    testNames.expectedFormat.forEach(file => {
      test(file.name, () => {
        expect(
          util.getCurrentVersion(util.getVersionFromString(file.name))
        ).toBe(file.version);
      });
    });
  });
});
