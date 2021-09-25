import Router from '../util/Router.js';
import * as User from '../../db/entities/User.js';
import { POST } from '../util/constants.js';
import avatars from '../../constants/avatars.js';
import sample from '../../util/sample.js';
import { lte, length, compose } from 'ramda';

class UserRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      POST,
      '/auth',
      this.withBodyValidator({
        username: [
          {
            check: compose(lte(3), length),
            message: () => 'length must be at least 3 characters',
          },
          {
            check: username => !User.list({ username }),
            message: value => `username "${value}" already exists`,
          },
        ],
      }),
      this.auth,
    );
  }

  async auth(req, res) {
    const { username } = req.body;
    const avatar = sample(avatars);
    const data = { username, avatar };

    const result = await User.create(data);

    res.send(result);
  }
}

export default UserRouter;
