import { AbstractLogger, LogLevel } from './AbstractLogger';
/**
 * Logger class
 * @beta
 */
export declare class LoglevelAdapter extends AbstractLogger {
    /**
     * maps of loglevel levels to logLevel enum elements
     */
    levelMap: LogLevel[];
    /**
      * Gets current log level
      * @method
      * @return {LogLevel} current log level, never false because loglevel has a default
      */
    getLevel(): LogLevel;
    /**
     * Sets minimum log level to be shown
     * @method
     * @param {logLevel} logLevel
     * @return {LogLevel} log level just set
     */
    setMinimumLogLevel(logLevel: LogLevel): LogLevel;
    /**
     * Logs one or more messages, it's called by specific loglevel methods
     * @abstract
     * @method
     * @access protected
     * @param {LogLevel} logLevel - log level
     * @param {string[]|object[]} messages - messages
     * @return {void}
     */
    protected log(logLevel: LogLevel, ...messages: string[] | object[]): void;
    /**
    * Logs one or mode messages with 'trace' log level
     * @abstract
     * @method
     * @access public
     * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
     * @return {void}
     */
    trace(...messages: string[] | object[]): void;
    /**
    * Logs one or mode messages with 'debug' log level
     * @abstract
     * @method
     * @access public
     * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
     * @return {void}
     */
    debug(...messages: string[] | object[]): void;
    /**
    * Logs one or mode messages with 'info' log level
     * @abstract
     * @method
     * @access public
     * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
     * @return {void}
     */
    info(...messages: string[] | object[]): void;
    /**
    * Logs one or mode messages with 'warn' log level
     * @abstract
     * @method
     * @access public
     * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
     * @return {void}
     */
    warn(...messages: string[] | object[]): void;
    /**
    * Logs one or mode messages with 'error' log level
     * @abstract
     * @method
     * @access public
     * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
     * @return {void}
     */
    error(...messages: string[] | object[]): void;
}
