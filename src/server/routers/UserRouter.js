import { lte, length, compose, propEq, includes, prop } from 'ramda';
import Router from '../util/Router.js';
import User from '../../db/entities/User.js';
import { GET, POST } from '../util/constants.js';
import avatars from '../../constants/avatars.js';
import sample from '../../util/sample.js';
import { bodyValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import requireAuthMiddleware from '../middlewares/authenticationMiddleware.js';

class UserRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      POST,
      '/auth',
      bodyValidatorMiddleware({
        username: [
          {
            check: compose(lte(3), length),
            message: () => 'length must be at least 3 characters',
          },
        ],
      }),
      this.auth,
    );

    this.addRoute(GET, '', requireAuthMiddleware(), this.list);
    this.addRoute(GET, '/logout', this.logout);
  }

  async auth(req, res) {
    const { username } = req.body;

    const existingUser = User.find(propEq('username', username));

    if (existingUser) {
      req.session.username = username;
      res.send(existingUser);

      return;
    }

    const avatar = sample(avatars);
    const data = { username, avatar };
    const newUser = await User.create(data);

    res.send(newUser);
  }

  async logout(req, res) {
    delete req.session.username;
    res.status(201).send();
  }

  async list(req, res) {
    const { username } = req.query;
    const data = await User.list();

    if (!username) {
      res.send(data);

      return;
    }

    res.send(data.filter(compose(includes(username), prop('username'))));
  }
}

export default UserRouter;
