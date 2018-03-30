const chalk = require('chalk');

const log = console.log;

const success = function success(str) {
  return chalk.green(str);
};

const danger = function danger(str) {
  return chalk.red(str);
};

const bold = function bold(str) {
  return chalk.bold(str);
}

const underline = function underline(str) {
  return chalk.underline(str);
}

const dangerU = function dangerU(str) {
  return underline(danger(str));
};

const successU = function successU(str) {
  return underline(success(str));
};
 
module.exports = {
  log,
  success,
  danger,
  bold,
  underline,
  dangerU,
  successU,
};
