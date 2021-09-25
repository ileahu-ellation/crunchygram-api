import { Router as ExpressRouter } from 'express';
import invariant from '../../util/invariant.js';
import createValidator from './createValidator.js';
import { HTTP_METHODS } from './constants.js';

class Router {
  path;
  router = ExpressRouter();

  constructor({ path }) {
    invariant(path && path.startsWith('/'));

    this.path = path;
  }

  #wrapHandler(handler) {
    return async (req, res, next) =>
      Promise.resolve(handler(req, res, next)).catch(next);
  }

  #createValidator(prop) {
    return options => {
      const validate = createValidator(options);

      return (req, res, next) => {
        try {
          validate(req[prop]);
          next();
        } catch (e) {
          next(e);
        }
      };
    };
  }

  addRoute(method, path, ...handlers) {
    invariant(HTTP_METHODS.includes(method));

    this.router[method](path, handlers.map(this.#wrapHandler));
  }

  withQueryValidator = this.#createValidator('query');

  withBodyValidator = this.#createValidator('body');
}

export default Router;
