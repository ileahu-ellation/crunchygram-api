import { Router as ExpressRouter } from 'express';
import invariant from '../../util/invariant.mjs';
import createValidator from './createValidator.mjs';

class Router {
  path;
  router = ExpressRouter();

  constructor({ path }) {
    invariant(path && path.startsWith('/'));

    this.path = path;

    this.configure();
  }

  configure() {
    throw new Error('not implemented');
  }

  #wrapHandler(handler) {
    return async (req, res, next) =>
      Promise.resolve(handler(req, res, next)).catch(next);
  }

  addRoute(method, path, ...handlers) {
    invariant(['get', 'post', 'patch', 'delete'].includes(method));

    this.router[method](path, handlers.map(this.#wrapHandler));
  }

  withQueryValidator(options) {
    const validate = createValidator(options);

    return (req, res, next) => {
      try {
        validate(req.query);
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}

export default Router;
