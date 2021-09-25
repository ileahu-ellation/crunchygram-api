import express from 'express';
import loggerMiddleware from './middlewares/loggerMiddleware.mjs';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.mjs';
import invariant from '../util/invariant.mjs';
import NotFoundException from './exceptions/NotFoundException.mjs';

class Server {
  #port;
  #path;
  #app = express();

  constructor({ port, path, routers = [] }) {
    invariant(path && path.startsWith('/'));
    invariant(port && Number(port) === ~~port);

    this.#port = port;
    this.#path = path;

    this.addMiddleware(loggerMiddleware());
    this.addMiddleware(express.json());
    this.#addRouters(routers);
  }

  #addRouters(routers) {
    routers.forEach(({ router, path }) => {
      this.#app.use(this.#path + path, router);
    });

    this.#app.get('*', function (req, res, next) {
      next(new NotFoundException());
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
