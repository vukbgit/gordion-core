"use strict";
import util from 'util';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abstract = void 0;
/**
 * @description Decorates a class to enforce its abstract nature
 * @decorator
 * @export
 * @template T
 * @param {T} klass
 * @returns T
 */
const Abstract = (klass) => {
    return new Proxy(klass, new AbstractHandler());
};
exports.Abstractx = Abstract;
class AbstractHandler {
    construct(target, args, newTarget) {
      if (this.shouldThrow(target, newTarget)) {
        this.throwError(target);
      }
      console.log(util.inspect(target));
      console.log(Reflect.has(target.prototype, 'testMethod'));
      console.log(util.inspect(newTarget));
      console.log(Reflect.has(newTarget.prototype, 'testMethod'));
      
        return Reflect.construct(target, args, newTarget);
    }
    shouldThrow(target, newTarget) {
        return target.prototype.constructor === newTarget.prototype.constructor;
    }
    throwError(target) {
        throw new Error(`'${target.name}' is an Abstractx class and cannot be instantiated directly`);
    }
}