# yarnrc-migrator-cli

[![npm version](https://badge.fury.io/js/yarnrc-migrator-cli.svg)](https://badge.fury.io/js/yarnrc-migrator-cli)

Tool helping migrate your .npmrc data to Yarn V2 .yarnrc.yml.

# Status

- The current implentation copies npmrc repository keys into `npmRegistries` section at `.yarnrc.yml` witout any additional conversion.

# Usage

```sh-session
$ npm install -g yarnrc-migrator-cli

$ yarnrc-migrator-cli # migrate your root .npmrc keys into .yarnrc.yml unless .yarnrc.yml exists
$ yarnrc-migrator-cli -f # migrate your root .npmrc keys into .yarnrc.yml overwritting existing data

$ yarnrc-migrator-cli (-v|--version|version)
yarnrc-migrator-cli/0.0.1 darwin-x64 node-v14.16.1
$ yarnrc-migrator-cli --help
```
