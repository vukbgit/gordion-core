import util from 'util';
import log from 'loglevel';
import chalk from 'chalk';
import { AbstractLogger, LogLevel } from './AbstractLogger';

/**
 * Logger class
 * @beta
 */
export class LoglevelAdapter extends AbstractLogger {

  /**
   * maps of loglevel levels to logLevel enum elements
   */
  levelMap: LogLevel[] = [
    'trace',
    'debug',
    'info',
    'warn',
    'error',
    'silent'
  ]

  /**
    * Gets current log level
    * @method
    * @return {LogLevel} current log level, never false because loglevel has a default
    */
   public getLevel(): LogLevel {
    //get current level index
    const currentLevelIndex = log.getLevel()
    //return current level label
    return this.levelMap[currentLevelIndex]
  }

  /**
   * Sets minimum log level to be shown
   * @method
   * @param {logLevel} logLevel
   * @return {LogLevel} log level just set
   */
   public setMinimumLogLevel(logLevel: LogLevel): LogLevel {
    log.setLevel(logLevel as log.LogLevelDesc)
    return this.getLevel()
  }

  /**
   * Logs one or more messages, it's called by specific loglevel methods
   * @abstract
   * @method
   * @access protected
   * @param {LogLevel} logLevel - log level
   * @param {string[]|object[]} messages - messages
   * @return {void}
   */
  protected log(logLevel: LogLevel, ...messages: string[]|object[]): void {
     //map messages to an array
    const enhancedMessages = messages.map((message: string|object) => {
      //get string representation of objects
      if (typeof message === 'object') {
        message = '\n' + util.inspect(message)
      }
      return message
    })
    //format accordingly to log level
    switch(logLevel) {
      case 'trace':
        log.trace(chalk.bgWhite.black(...enhancedMessages))
        break
      case 'debug':
        log.debug(chalk.bgGreenBright.black(...enhancedMessages))
        break
      case 'info':
        log.info(chalk.bgBlue.white(...enhancedMessages))
        break
      case 'warn':
        log.warn(chalk.bgYellow.black(...enhancedMessages))
        break
      case 'error':
        log.error(chalk.bgRed.black(...enhancedMessages))
        break
      default:
        log.info(chalk.reset(...enhancedMessages))
    }
  }

  /**
  * Logs one or mode messages with 'trace' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
  public trace(...messages: string[]|object[]) {
    this.log('trace', ...messages)
  }

  /**
  * Logs one or mode messages with 'debug' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
   public debug(...messages: string[]|object[]) {
    this.log('debug', ...messages)
  }

  /**
  * Logs one or mode messages with 'info' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
   public info(...messages: string[]|object[]) {
    this.log('info', ...messages)
  }

  /**
  * Logs one or mode messages with 'warn' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
   public warn(...messages: string[]|object[]) {
    this.log('warn', ...messages)
  }

  /**
  * Logs one or mode messages with 'error' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
   public error(...messages: string[]|object[]) {
    this.log('error', ...messages)
  }
}