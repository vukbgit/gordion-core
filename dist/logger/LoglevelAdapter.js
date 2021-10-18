"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoglevelAdapter = void 0;

var _util = _interopRequireDefault(require("util"));

var _loglevel = _interopRequireDefault(require("loglevel"));

var _chalk = _interopRequireDefault(require("chalk"));

var _AbstractLogger = require("./AbstractLogger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Logger class
 * @beta
 */
class LoglevelAdapter extends _AbstractLogger.AbstractLogger {
  /**
   * maps of loglevel levels to logLevel enum elements
   */
  levelMap = ['trace', 'debug', 'info', 'warn', 'error', 'silent'];
  /**
    * Gets current log level
    * @method
    * @return {LogLevel} current log level, never false because loglevel has a default
    */

  getLevel() {
    //get current level index
    const currentLevelIndex = _loglevel.default.getLevel(); //return current level label


    return this.levelMap[currentLevelIndex];
  }
  /**
   * Sets minimum log level to be shown
   * @method
   * @param {logLevel} logLevel
   * @return {LogLevel} log level just set
   */


  setMinimumLogLevel(logLevel) {
    _loglevel.default.setLevel(logLevel);

    return this.getLevel();
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


  log(logLevel, ...messages) {
    //map messages to an array
    const enhancedMessages = messages.map(message => {
      //get string representation of objects
      if (typeof message === 'object') {
        message = '\n' + _util.default.inspect(message);
      }

      return message;
    }); //format accordingly to log level

    switch (logLevel) {
      case 'trace':
        _loglevel.default.trace(_chalk.default.bgWhite.black(...enhancedMessages));

        break;

      case 'debug':
        _loglevel.default.debug(_chalk.default.bgGreenBright.black(...enhancedMessages));

        break;

      case 'info':
        _loglevel.default.info(_chalk.default.bgBlue.white(...enhancedMessages));

        break;

      case 'warn':
        _loglevel.default.warn(_chalk.default.bgYellow.black(...enhancedMessages));

        break;

      case 'error':
        _loglevel.default.error(_chalk.default.bgRed.black(...enhancedMessages));

        break;

      default:
        _loglevel.default.info(_chalk.default.reset(...enhancedMessages));

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


  trace(...messages) {
    this.log('trace', ...messages);
  }
  /**
  * Logs one or mode messages with 'debug' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */


  debug(...messages) {
    this.log('debug', ...messages);
  }
  /**
  * Logs one or mode messages with 'info' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */


  info(...messages) {
    this.log('info', ...messages);
  }
  /**
  * Logs one or mode messages with 'warn' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */


  warn(...messages) {
    this.log('warn', ...messages);
  }
  /**
  * Logs one or mode messages with 'error' log level
   * @abstract
   * @method
   * @access public
   * @param {string[]|object[]} messages - messages to be outputted or objects to be dumped
   * @return {void}
   */


  error(...messages) {
    this.log('error', ...messages);
  }

}

exports.LoglevelAdapter = LoglevelAdapter;