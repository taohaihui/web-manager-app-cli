#!/usr/bin/env node

const chalk = require('chalk');

let nodeInfo = process.versions.node;
var semver = nodeInfo.split('.');
var major = semver[0];

if (major < 8) {
  console.log(
    chalk.yellow(`
      当前系统node版本：${nodeInfo}\n
      您的node版本有点低哦！`)
  );
}

require('../src/index.js');
