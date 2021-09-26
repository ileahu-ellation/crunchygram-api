import { lte, length, compose, propEq, includes, prop } from 'ramda';
import Router from '../util/Router.js';
import User from '../../db/entities/User.js';
import { GET, POST } from '../util/constants.js';
import avatars from '../../constants/avatars.js';
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
            check: compose(lte(3), length),
            message: () => 'length must be at least 3 characters',
          },
          {
            check: value => !User.find(propEq('username', value)),
            message: value => `username "${value}" already exists`,
          },
        ],
      }),
      this.auth,
    );

    this.addRoute(
      GET,
      '',
      this.withQueryValidator({
        username: [
          {
            check: value => !value || typeof value === 'string',
            message: () => 'username prop must be a string',
          },
        ],
      }),
      this.list,
    );
  }

  async auth(req, res) {
    const { username } = req.body;
    const avatar = sample(avatars);
    const data = { username, avatar };

    const result = await User.create(data);

    res.send(result);
  }

  async list(req, res) {
    const { username } = req.query;
    const data = await User.list();

    if (!username) {
      return res.send(data);
    }

    res.send(data.filter(compose(includes(username), prop('username'))));
  }
}

export default UserRouter;
