/**
 * Abstract class to be used to create adapter
 * @class
 * @abstract
 */
export abstract class AbstractLog {

  /**
   * Gets current log level
   * @abstract
   * @method
   * @access public
   * @return {LogLevel|boolean} current log level or false if not set or not recognized as one of legitimate levels
   */
  public abstract getLevel(): LogLevel|boolean

  /**
   * Sets minimum log level to be shown
   * @abstract
   * @method
   * @access public
   * @param {LogLevel} logLevel
   * @return {LogLevel} log level just set
   */
  public abstract setMinimumLogLevel(logLevel: LogLevel): LogLevel

  /**
   * Logs one or more messages, it's called by specific loglevel methods
   * @abstract
   * @method
   * @access protected
   * @param {LogLevel} logLevel - log level
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
  protected abstract log(logLevel: LogLevel, ...messages: string[]|object[]): void

  /**
   * Logs one or mode messages with 'trace' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
  public abstract trace(...messages: string[]|object[]): void
  
  /**
   * Logs one or mode messages with 'debug' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
   public abstract debug(...messages: string[]|object[]): void
  
  /**
   * Logs one or mode messages with 'info' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
   public abstract info(...messages: string[]|object[]): void
  
   /**
   * Logs one or mode messages with 'warn' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
   public abstract warn(...messages: string[]|object[]): void
  
   /**
   * Logs one or mode messages with 'error' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */
    public abstract error(...messages: string[]|object[]): void
  
  
}

/**
 * Possible log levels values
 * @type {string[]}
 */

export const logLevels = [
  'trace',
   'debug',
   'info',
   'warn',
   'error',
   'silent'  
]

/**
 * Possible log levels type
 * @type {typeof logLevels[number]}
 */
export type LogLevel = typeof logLevels[number]