const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
const fs = require('fs');
const autoRecord = require('cypress-autorecord/plugin');
const happoTask = require('happo-cypress/task');
// const { initPlugin } = require("cypress-plugin-snapshots/plugin");

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
  on('task', happoTask);
  autoRecord(on, config, fs);
  // initPlugin(on, config);
  return config;
};
