module.exports = {
  getVersionFromString: [
    { name: 'file.txt?v=4.0.0', version: '4.0.0' },
    { name: 'file.txt?v=4', version: '4' },
    { name: 'user.xml?id=123&name=bob&v=12.6.2&zone=4B', version: '12.6.2' },
    { name: 'user.xml?foo=bar&baz=boo&v=10', version: '10' },
    { name: 'file.txt', version: undefined },
    { name: 'file.txt?foo=bar;baz=boo;v=10', version: undefined },
  ],
  versionIsValid: [
    { version: '1.0.0', isValid: '1.0.0' },
    { version: '3.2.4', isValid: '3.2.4' },
    { version: '3.3.1-9', isValid: '3.3.1-9' },
    { version: '4', isValid: null },
    { version: '2.3', isValid: null },
    { version: '', isValid: null },
  ],
  getVersion: [
    { name: 'file.txt?v=300', version: '300.0.0' },
    { name: 'files.txt?v=2', version: '2.0.0' },
    { name: 'semFile.txt?v=1.2.3', version: '1.2.3' },
    { name: 'file.eot?v=19', version: '19.0.0' },
    { name: 'file.txt', version: null },
    { name: 'user.xml?foo=bar&baz=boo&v=10', version: '10.0.0' },
    { name: 'file.txt?foo=bar;baz=boo;v=10', version: null }
  ],
  nextVersion: [
    { releaseType: 'patch', version: '0.0.1', expected: '0.0.2' },
    { releaseType: 'minor', version: '1.0.0', expected: '1.1.0' },
    { releaseType: 'minor', version: '1', expected: null },
    { releaseType: 'minor', version: '3.2', expected: null },
    { releaseType: 'major', version: '3.5.2', expected: '4.0.0' },
    { releaseType: 'major', version: '4.0.0-0', expected: '4.0.0' },
    { releaseType: 'prerelease', version: '3.0.0', expected: '3.0.1-0' },
    { releaseType: 'prepatch', version: '3.0.1-0', expected: '3.0.2-0' },
    { releaseType: 'preminor', version: '3.0.1-0', expected: '3.1.0-0' },
    { releaseType: 'premajor', version: '3.1.0-0', expected: '4.0.0-0' }
  ],
  getNewFileName: [
    {
      fileObject: {
        filename: 'file.txt?v=4.0.0',
        version: '4.0.0',
        nextVersion: '4.0.1'
      },
      newFileName: 'file.txt?v=4.0.1'
    },
    {
      fileObject: {
        filename: 'font.eot?a=b&fo=bar&v=2.4.1',
        version: '2.4.1',
        nextVersion: '2.5.0'
      },
      newFileName: 'font.eot?a=b&fo=bar&v=2.5.0'
    },
    {
      fileObject: {
        filename: 'user.xml?id=123&name=bob&v=12.6.2&zone=4B',
        version: '12.6.2',
        nextVersion: '13.0.0'
      },
      newFileName: 'user.xml?id=123&name=bob&v=13.0.0&zone=4B'
    }
  ]
};
