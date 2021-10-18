"use strict";

var _globals = require("@jest/globals");

var _AbstractLog = require("./AbstractLog");

var _index = require("./index");

//instance
const logger = new _index.Log(); //logger.warn('warn?')

(0, _globals.describe)('Logger module', () => {
  //check instance
  (0, _globals.test)('concrete class exported from module must be instance of abstract class', () => {
    (0, _globals.expect)(logger).toBeInstanceOf(_AbstractLog.AbstractLog);
  }); //check level

  (0, _globals.test)(`log level input must be one of mapped logLevels ${_AbstractLog.logLevels.join(', ')}`, () => {
    //loop legitimate levels
    _AbstractLog.logLevels.forEach(level => {
      (0, _globals.expect)(_AbstractLog.logLevels).toContain(logger.setMinimumLogLevel(level));
    }); //try with a pseudo-random string


    const wrongLevel = (Math.random() + 1).toString(36).substring(7);
    (0, _globals.expect)(() => {
      logger.setMinimumLogLevel(wrongLevel);
    }).toThrow();
  }); //check output according to minimum level
  //no way to test console output
});