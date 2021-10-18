"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChildProcessAdapter = void 0;

var childPromise = _interopRequireWildcard(require("child-process-promise"));

var _AbstractCli = require("./AbstractCli");

var _log = require("../log");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const logger = new _log.Log();
/**
 * Cli class
 * @class
 * @abstract
 */

class ChildProcessAdapter extends _AbstractCli.AbstractCli {
  /**
   * Execs a shell command asynchronously
   * @method
   * @access public
   * @param {string} command - command string to be executed
   * @param {boolean} silent - boolean to output info
   * @return {Promise<ExecSuccess | ExecError>} a promise with either an ExecSuccess or ExecError object
   */
  async execAsync(command, silent = false) {
    if (silent !== true) {
      logger.info(`GORDION SHELL COMMANDER: ${command}`);
    }

    try {
      let result = await childPromise.exec(command);

      if (silent !== true) {
        logger.info(result.stdout);
      }

      let outcome = {
        success: true,
        childProcess: result.childProcess,
        stdout: result.stdout,
        stderr: result.stderr
      };
      return outcome;
    } catch (err) {
      let result = {
        success: false,
        stderr: err.stderr,
        stdout: ''
      };

      if (silent !== true) {
        logger.error(err);
      }

      return result;
    }
  }

}
/**
 * Success interface 
 */


exports.ChildProcessAdapter = ChildProcessAdapter;