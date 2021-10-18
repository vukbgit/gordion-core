import * as childPromise from 'child-process-promise';
import { AbstractCli, ExecSuccess, ExecError } from './AbstractCli';
import { Log } from '../log'

const logger = new Log

/**
 * Cli class
 * @class
 * @abstract
 */
 export class ChildProcessAdapter extends AbstractCli {
  
  /**
   * Execs a shell command asynchronously
   * @method
   * @access public
   * @param {string} command - command string to be executed
   * @param {boolean} silent - boolean to output info
   * @return {Promise<ExecSuccess | ExecError>} a promise with either an ExecSuccess or ExecError object
   */
  public async execAsync(command: string, silent: boolean=false): Promise<ChildProcessExecSuccess | ExecError> {
    if(silent !== true) {
      logger.info(`GORDION SHELL COMMANDER: ${command}`)
    }
    try {
      let result:childPromise.PromiseResult<string> = await childPromise.exec(
        command
      )
      if(silent !== true) {
        logger.info(result.stdout)
      }
      let outcome:ChildProcessExecSuccess = {
        success: true,
        childProcess: result.childProcess,
        stdout: result.stdout,
        stderr: result.stderr
      }
      return outcome
    } catch(err: any) {
      let result:ExecError = {
        success:false,
        stderr: err.stderr,
        stdout: ''
      }
      if(silent !== true) {
        logger.error(err)
      }
      return result
    }
   }
}

/**
 * Success interface 
 */
 interface ChildProcessExecSuccess extends ExecSuccess, childPromise.PromiseResult<string>
 {
   success:boolean
 }
 