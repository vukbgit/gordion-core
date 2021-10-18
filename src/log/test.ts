import { describe, expect, test } from '@jest/globals';
import { AbstractLog, logLevels } from './AbstractLog'
import { Log } from './index'

//instance
const logger = new Log

//logger.warn('warn?')

describe('Logger module', () => {
  //check instance
  test('concrete class exported from module must be instance of abstract class', () => {
    expect(logger).toBeInstanceOf(AbstractLog);
  })
  //check level
  test(`log level input must be one of mapped logLevels ${logLevels.join(', ')}`, () => {
    //loop legitimate levels
    logLevels.forEach(level => {
      expect(logLevels).toContain(logger.setMinimumLogLevel(level));
    });
    //try with a pseudo-random string
    const wrongLevel = (Math.random() + 1).toString(36).substring(7);
    expect(() => {logger.setMinimumLogLevel(wrongLevel)}).toThrow();
  })
  //check output according to minimum level
  //no way to test console output
})