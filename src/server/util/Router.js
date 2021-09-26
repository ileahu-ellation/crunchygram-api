import { Router as ExpressRouter } from 'express';
import invariant from '../../util/invariant.js';
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

  addRoute(method, path, ...handlers) {
    invariant(HTTP_METHODS.includes(method));

    this.router[method](path, handlers.map(this.#wrapHandler));
  }
}

export default Router;
