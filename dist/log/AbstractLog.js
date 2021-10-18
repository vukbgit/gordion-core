"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logLevels = exports.AbstractLog = void 0;

/**
 * Abstract Log class to be used to create adapter
 * @class
 * @abstract
 */
class AbstractLog {}
/**
 * Possible log levels values
 * @type {string[]}
 */


exports.AbstractLog = AbstractLog;
const logLevels = ['trace', 'debug', 'info', 'warn', 'error', 'silent'];
/**
 * Possible log levels type
 * @type {typeof logLevels[number]}
 */

exports.logLevels = logLevels;