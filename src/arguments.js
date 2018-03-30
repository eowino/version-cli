const fs = require('fs');
const path = require('path');

const features = require('./features');
const args = require('minimist')(process.argv.slice(2), features.minimistArgs);
const log = require('./logging');
const util = require('./utilities');

const cwd = process.cwd();
const rootPath = `${__dirname}/../`;
const argsFiles = args._;
const filesFound = argsFiles.map(filename => `${path.join(cwd, filename)}`);

const help = function help() {
  const README = fs.readFileSync(`${rootPath}README.md`, 'utf-8').trim();
  log.log(`\n${README}`);
  process.exit();
};

const version = function version() {
  const { version } = require(`${rootPath}package.json`);
  log.log(`\nv${version}`);
  process.exit();
};

const getReleaseType = function getReleaseType() {
  let releaseType = features.semver.find(type => args[type] === true);
  
  if (releaseType === 'pre') releaseType = 'prerelease';
  if (!releaseType) releaseType = 'patch';

  return releaseType;
};

const getPath = function getPath(filename = '') {
  return `${path.join(cwd, filename)}`;
};

const checkForInvalidFile = function checkForInvalidFile() {
  try {
    fs.statSync(argsFiles[0]);
  } catch (error) {
    log.log(log.danger(`\n${error}`));
    process.exit();
  }
};

const getVersionFromFile = function getVersionFromFile() {
  argsFiles.forEach(file => {
    const version = util.getVersion(file);
    const nextVersion = util.nextVersion(version, getReleaseType());
    
    // if version and nextVersion are valid
    if (version && nextVersion) {
      util.logBumpInfo(file, version, nextVersion);
    }
  });
};

if (args.version) version();
if (args.help || argsFiles.length === 0) help();

checkForInvalidFile();
getVersionFromFile();

// log.log(argsFiles);
// log.log(filesFound)
// log.log(args);
