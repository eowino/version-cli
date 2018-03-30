module.exports = {
  minimistArgs: {
    boolean: [
      'help',
      'version',
      'trial',
      'yes',
      'silent',
      'to',
      'patch',
      'minor',
      'major',
      'pre',
      'prerelease',
      'prepatch',
      'preminor',
      'premajor'
    ],
    alias: {
      h: 'help',
      v: 'version',
      l: 'trial',
      y: 'yes',
      s: 'silent',
      t: 'to',
      p: 'patch',
      m: 'minor',
      M: 'major'
    }
  },
  semver: [
    'major',
    'minor',
    'premajor',
    'preminor',
    'prepatch',
    'pre',
    'prerelease',
    'patch'
  ]
};
