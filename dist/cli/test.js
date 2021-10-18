"use strict";

var _globals = require("@jest/globals");

var _AbstractCli = require("./AbstractCli");

var _index = require("./index");

//instance
const cli = new _index.Cli();
(0, _globals.describe)('Cli module', () => {
  //check instance
  (0, _globals.test)('concrete class exported from module must be instance of abstract class', () => {
    (0, _globals.expect)(cli).toBeInstanceOf(_AbstractCli.AbstractCli);
  });
  /*//check level
  test(`log level input must be one of mapped logLevels ${logLevels.join(', ')}`, () => {
    //loop legitimate levels
    logLevels.forEach(level => {
      expect(logLevels).toContain(logger.setMinimumLogLevel(level));
    });
    //try with a pseudo-random string
    const wrongLevel = (Math.random() + 1).toString(36).substring(7);
    expect(() => {logger.setMinimumLogLevel(wrongLevel)}).toThrow();
  })*/
  //check output according to minimum level
  //no way to test console output
});