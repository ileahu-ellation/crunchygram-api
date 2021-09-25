import Router from '../util/Router.mjs';
import * as User from '../../db/entities/User.mjs';

class UserRouter extends Router {
  configure() {
    this.addRoute(
      'get',
      '/auth',
      this.withQueryValidator({
        username: [
          {
            check: value => value.length >= 3,
            message: () => 'length must be at least 3 characters',
          },
          {
            check: value =>
              !User.list().find(({ username }) => username === value),
            message: value => `username "${value}" already exists`,
          },
        ],
      }),
      this.auth,
    );
  }

  auth(req, res, next) {
    const { username } = req.query;

    res.send({
      username,
    });
  }
}

export default UserRouter;
