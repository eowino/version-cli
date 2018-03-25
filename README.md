# version-cli

A CLI for updating the version numbers of files

## Prerequisites

This CLI requires Node 6.0.0 or higher.

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
--prepatch          |  increment patch and add prerelease e.g. 1.2.3 -> 2.3.4-0
--preminor          |  increment minor and add prerelease e.g. 1.2.3 -> 2.3.0-0
--premajor          |  increment major and add prerelease e.g. 1.2.3 -> 2.0.0-0

**Please note** that `patch` is the default command used to increment versions

## License

MIT