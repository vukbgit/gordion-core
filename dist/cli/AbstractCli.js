"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractCli = void 0;

var _log = require("../log");

const logger = new _log.Log();
/**
 * Shell Commander class
 * @beta
 */

class AbstractCli {
  execAsync(command) {
    logger.warn('async exec!');
  }

}

exports.AbstractCli = AbstractCli;