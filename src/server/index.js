import express from 'express';
import cookieParser from 'cookie-parser';
import loggerMiddleware from './middlewares/loggerMiddleware.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import invariant from '../util/invariant.js';
import NotFoundException from './exceptions/NotFoundException.js';
import { HTTP_METHODS } from './util/constants.js';
import docs from './docs/index.js';

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
    this.addMiddleware((req, res, next) => {
      const { origin } = req.headers;

      res.setHeader('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.header('Access-Control-Allow-Credentials', true);
      return next();
    });
    this.addMiddleware(cookieParser());
    this.addMiddleware(loggerMiddleware());
    this.addMiddleware(express.json());
    this.#addRouters(routers);
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
    this.addMiddleware(errorHandlerMiddleware());

    return new Promise(resolve => {
      this.#app.listen(this.#port, () => resolve(this));
    });
  }
}

export default Server;
