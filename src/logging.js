const chalk = require('chalk');

const success = function success(str) {
  console.log(chalk.green(str));
};

const danger = function danger(str) {
  console.log(chalk.red(str));
};

module.exports = {
  success,
  danger
};
