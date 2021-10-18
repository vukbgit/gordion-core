import { describe, expect, test } from '@jest/globals';
import { AbstractCli } from './AbstractCli'
import { Cli } from './index'

//instance
const cli = new Cli

describe('Cli module', () => {
  //check instance
  test('concrete class exported from module must be instance of abstract class', () => {
    expect(cli).toBeInstanceOf(AbstractCli);
  })
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
})