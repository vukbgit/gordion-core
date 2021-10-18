"use strict";

var _globals = require("@jest/globals");

var _AbstractLogger = require("./AbstractLogger");

var _index = require("./index");

//instance
const logger = new _index.Logger(); //logger.warn('warn?')

(0, _globals.describe)('Logger module', () => {
  //check instance
  (0, _globals.test)('concrete class exported from module must be instance of abstract class', () => {
    (0, _globals.expect)(logger).toBeInstanceOf(_AbstractLogger.AbstractLogger);
  }); //check level

  (0, _globals.test)(`log level input must be one of mapped logLevels ${_AbstractLogger.logLevels.join(', ')}`, () => {
    //loop legitimate levels
    _AbstractLogger.logLevels.forEach(level => {
      //expect(logger.setMinimumLogLevel(level)).not.toThrow();
      (0, _globals.expect)(_AbstractLogger.logLevels).toContain(logger.setMinimumLogLevel(level));
    }); //try with a pseudo-random string


    const wrongLevel = (Math.random() + 1).toString(36).substring(7);
    (0, _globals.expect)(() => {
      logger.setMinimumLogLevel(wrongLevel);
    }).toThrow();
  }); //check output according to minimum level
  //no way to test console output
});