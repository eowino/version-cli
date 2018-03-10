const fs = require('fs');
const path = require('path');

const DIR = path.join(process.cwd(), 'files/');
const Console = console;

const getVersionFromString = function getVersionFromString(str = '') {
  if (str.length < 1) return [];
  const versionPosition = str.indexOf('?v=');
  // skip the ?v= and get the rest of the string
  return str.substr(versionPosition + 3).split('');
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

const getNewFileName = function getNewFileName(fileName) {
  let newFileName = '';
  // check to see if versioning is already applied to file name
  if (fileName.indexOf('?v=') === -1) {
    newFileName = `${fileName}?v=1`;
  } else {
    // assuming last char of file name should be the current version e.g. file.txt?v=1
    const currentVersion = getCurrentVersion(getVersionFromString(fileName));
    const shiftBy = `${currentVersion}`.length;
    // construct new file name by incrementing the current version by 1
    newFileName = `${fileName.substr(
      0,
      fileName.length - `${3 + shiftBy}`
    )}?v=${currentVersion + 1}`;
  }
  return newFileName;
};

const getFiles = function getFiles(pathToFiles, cb) {
  fs.readdir(pathToFiles, (err, files) => {
    if (err) {
      Console.error(err);
      return;
    }

    if (cb && typeof cb === 'function') cb(files);
  });
};

const renameFiles = function renameFiles(files = []) {
  files.forEach(file => {
    const oldPath = `${DIR}${file}`;
    const newPath = `${DIR}${getNewFileName(file)}`;

    fs.rename(oldPath, newPath, err => {
      if (err) {
        Console.error(err);
      }
    });
  });
};

// bump files
getFiles(DIR, renameFiles);
