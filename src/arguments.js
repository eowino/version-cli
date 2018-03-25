const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2), require('./features'));
const logging = require('./logging');

const cwd = process.cwd();
const rootPath = `${__dirname}/../`;
const argsFiles = args._;
const filesFound = argsFiles.map(filename => `${path.join(cwd, filename)}`);

const help = function help() {
  const README = fs.readFileSync(`${rootPath}README.md`, 'utf-8').trim();
  console.log(`\n${README}`);
  process.exit();
};

const version = function version() {
  const { version } = require(`${rootPath}package.json`);
  console.log(`\nv${version}`);
  process.exit();
};

const getPath = function getPath(filename = '') {
  return `${path.join(cwd, filename)}`;
};

const checkForInvalidFiles = function checkForInvalidFiles() {
  argsFiles.some(file => {
    const path = getPath(file);

    fs.stat(path, (err, stat) => {
      if (err) {
        logging.danger(`\n${err}`);
        return true;
      }
    });

    return false;
  });
};

if (args.version) version();
if (args.help || argsFiles.length === 0) help();

checkForInvalidFiles();

// console.log(argsFiles);
// console.log(filesFound)
// console.log(args);
