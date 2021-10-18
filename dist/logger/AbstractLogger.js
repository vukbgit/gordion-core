"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logLevels = exports.AbstractLogger = void 0;

/**
 * Abstract class to be used to create adapter
 * @class
 * @abstract
 */
class AbstractLogger {}
/**
 * Possible log levels values
 * @type {string[]}
 */


exports.AbstractLogger = AbstractLogger;
const logLevels = ['trace', 'debug', 'info', 'warn', 'error', 'silent'];
/**
 * Possible log levels type
 * @type {typeof logLevels[number]}
 */

exports.logLevels = logLevels;