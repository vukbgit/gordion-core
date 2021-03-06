/**
* Abstract Cli class to be used to create adapter
 * @class
 * @abstract
 */
export declare abstract class AbstractCli {
    /**
     * Execs a shell command asynchronously
     * @method
     * @access public
     * @param {string} command - command string to be executed
     * @param {boolean} silent - boolean to output info
     * @return {Promise<ExecSuccess | ExecError>} a promise with either an ExecSuccess or ExecError object
     */
    abstract execAsync(command: string, silent: boolean): Promise<ExecSuccess | ExecError>;
}
/**
 * Success interface
 */
export interface ExecSuccess {
    success: boolean;
}
/**
 * Error interface
 */
export interface ExecError {
    success: boolean;
    stdout: string;
    stderr: string;
}
