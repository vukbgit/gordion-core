import { Log } from '../log'

const logger = new Log

/**
 * Shell Commander class
 * @beta
 */
 export class AbstractCli {
  public execAsync(command: string) {
    logger.warn('async exec!')
  }
 }