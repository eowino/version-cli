const util = require('../src/utilities');
const testNames = require('./testData');

describe('Utility functions', () => {
  describe('getVersionFromString()', () => {
    testNames.getVersionFromString.forEach(file => {
      test(file.name, () => {
        expect(util.getVersionFromString(file.name)).toBe(file.version);
      });
    });
  });

  describe('versionIsValid()', () => {
    testNames.versionIsValid.forEach(version => {
      test(version.version, () => {
        expect(util.versionIsValid(version.version)).toBe(version.isValid);
      });
    });
  });
  
  describe('getVersion()', () => {
    testNames.getVersion.forEach(file => {
      test(file.name, () => {
        expect(util.getVersion(file.name)).toBe(file.version);
      });
    });
  });

  describe('nextVersion()', () => {
    testNames.nextVersion.forEach(version => {
      test(`${version.releaseType}: ${version.version}`, () => {
        expect(util.nextVersion(version.version, version.releaseType))
          .toBe(version.expected);
      });
    });
  });

  describe('getNewFileName()', () => {
    testNames.getNewFileName.forEach(testEntry => {
      test(testEntry.fileObject.filename, () => {
        expect(util.getNewFileName(testEntry.fileObject))
          .toBe(testEntry.newFileName);
      });
    });
  });
});
