import express from 'express';
import cookieParser from 'cookie-parser';
import loggerMiddleware from './middlewares/loggerMiddleware.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import accessControlMiddleware from './middlewares/accessControlMiddleware.js';
import invariant from '../util/invariant.js';
import NotFoundException from './exceptions/NotFoundException.js';
import { HTTP_METHODS } from './util/constants.js';
import docs from './docs/index.js';
import cookieHelpersMiddleware from './middlewares/cookieHelpersMiddleware.js';

class Server {
  #port;
  #path;
  #app = express();

  constructor({ port, path, routers = [] }) {
    invariant(path && path.startsWith('/'));
    invariant(port && Number(port) === ~~port);

    this.#port = port;
    this.#path = path;

    docs(this.#app);

    this.#app.set('trust proxy', 1);
    this.addMiddleware(accessControlMiddleware());
    this.addMiddleware(cookieParser());
    this.addMiddleware(loggerMiddleware());
    this.addMiddleware(express.json());
    this.addMiddleware(cookieHelpersMiddleware());
    this.#addRouters(routers);
    this.addMiddleware(errorHandlerMiddleware());
  }

  #addRouters(routers) {
    routers.forEach(({ router, path }) => {
      this.#app.use(this.#path + path, router);
    });

    this.#addNotFoundRoutes();
  }

  #addNotFoundRoutes() {
    HTTP_METHODS.forEach(method => {
      this.#app[method]('*', function (req, res, next) {
        next(new NotFoundException());
      });
    });
  }

  addMiddleware(middleware) {
    this.#app.use(middleware);

    return this;
  }

  start() {
    return new Promise(resolve => {
      this.#app.listen(this.#port, resolve);
    });
  }
}

export default Server;
