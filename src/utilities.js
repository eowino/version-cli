const qr = require('query-string');
const semver = require('semver');

const log = require('./logging');

const getVersionFromString = (version = '') => qr.parseUrl(version).query['v'];

const versionIsValid = (version = '') => semver.valid(version);

const getVersion = function getVersion(filename = '') {
  let version = getVersionFromString(filename.toString());

  if (version === undefined) {
    version = null;
  } else if (!versionIsValid(version)) {
    const coerceObj = semver.coerce(version);

    if (coerceObj) {
      version = coerceObj.version;
    }
  }

  // returns null if version could not be procured
  return version;
};

const nextVersion = function nextVersion(version, releaseType) {
  return semver.inc(version, releaseType);
};

const logBumpInfo = function logBumpInfo(filename, version, nextVersion) {
  log.log(log.bold(`\n${filename}`));
  log.log(`\tCurrent version:  ${log.dangerU(version)}`)
  log.log(`\tNext version:     ${log.successU(nextVersion)}\n`)
};

module.exports = {
  getVersion,
  nextVersion,
  versionIsValid,
  logBumpInfo
};
