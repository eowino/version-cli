# version-cli

<img width="524" alt="version-cli usage" src="https://user-images.githubusercontent.com/9787512/38177470-1b409b12-35fa-11e8-854d-10baef0fb8de.png">

[![npm version](https://badge.fury.io/js/version-cli.svg)](https://npmjs.org/package/version-cli "View this project on npm") 

A CLI for updating the version numbers of files using the semver guidelines.

## Prerequisites

This CLI requires Node 6.0.0 or higher.

[![Status](https://travis-ci.org/eowino/version-cli.svg?branch=master)](https://travis-ci.org/eowino/version-cli)


## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

```bash
npm install -g version-cli
```

## Usage

```bash
version TARGET_FILES [options]
```

Option              | Description
------------------- | ------------ 
--help, -h          |  print help information
--version, -v       |  print the current version
--trial, -l         |  print what would happen without actually doing anything
--yes, -y           |  just do it, no questions asked
--silent, -s        |  silence messages, the --yes flag is assumed
--to, -t            |  use the specified version
--patch, -p         |  increment patch version e.g 0.2.1 -> 0.2.2
--minor, -m         |  increment minor version e.g 0.2.1 -> 0.3.0
--major, -M         |  increment major version e.g 0.2.1 -> 1.0.0
--prerelease, --pre |  increment a prerelease number e.g. 1.2.3-8 -> 1.2.3-9
--prepatch          |  increment patch and add prerelease e.g. 1.2.3 -> 1.2.4-0
--preminor          |  increment minor and add prerelease e.g. 1.2.3 -> 1.3.0-0
--premajor          |  increment major and add prerelease e.g. 1.2.3 -> 2.0.0-0

**Please note** that `patch` is the default command used to increment versions

## License

MIT
