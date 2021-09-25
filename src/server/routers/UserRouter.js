import Router from '../util/Router.js';
import * as User from '../../db/entities/User.js';
import { POST } from '../util/constants.js';
import sample from '../../util/sample.js';

class UserRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      POST,
      '/auth',
      this.withBodyValidator({
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

  async auth(req, res) {
    const { username } = req.body;
    const data = { username };

    res.send(data);
  }
}

export default UserRouter;
