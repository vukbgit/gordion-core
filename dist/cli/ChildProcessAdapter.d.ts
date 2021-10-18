import * as childPromise from 'child-process-promise';
import { AbstractCli, ExecSuccess, ExecError } from './AbstractCli';
/**
 * Cli class
 * @class
 * @abstract
 */
export declare class ChildProcessAdapter extends AbstractCli {
    /**
     * Execs a shell command asynchronously
     * @method
     * @access public
     * @param {string} command - command string to be executed
     * @param {boolean} silent - boolean to output info
     * @return {Promise<ExecSuccess | ExecError>} a promise with either an ExecSuccess or ExecError object
     */
    execAsync(command: string, silent?: boolean): Promise<ChildProcessExecSuccess | ExecError>;
}
/**
 * Success interface
 */
interface ChildProcessExecSuccess extends ExecSuccess, childPromise.PromiseResult<string> {
    success: boolean;
}
export {};
