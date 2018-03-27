const getVersionFromString = function getVersionFromString(str = '') {
  if (str.length < 1) return -1;
  const versionPosition = str.indexOf('v=');
  // skip the ?v= and get the rest of the string
  return str.substr(versionPosition + 2).split('');
};

const getCurrentVersion = function getCurrentVersion(str = []) {
  const currentVersion = [];

  for (let i = 0; i < str.length; i++) {
    if (!Number.isInteger(+str[i])) {
      return +currentVersion.join('');
    }

    currentVersion.push(str[i]);
  }
  return +currentVersion.join('');
};

module.exports = {
  getVersionFromString,
  getCurrentVersion
};