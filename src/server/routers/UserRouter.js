import { compose, includes, length, lte, prop, propEq } from 'ramda';
import Router from '../util/Router.js';
import User from '../../db/entities/User.js';
import { GET, POST } from '../util/constants.js';
import { bodyValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import requireAuthMiddleware from '../middlewares/requireAuthMiddleware.js';

class UserRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      POST,
      '/login',
      bodyValidatorMiddleware({
        username: [
          {
            check: compose(lte(3), length),
            message: () => 'length must be at least 3 characters',
          },
        ],
      }),
      this.login,
    );

    this.addRoute(GET, '', requireAuthMiddleware(), this.list);
    this.addRoute(GET, '/logout', this.logout);
  }

  /**
   * POST /api/user/login
   * @summary Authentication/create account
   * @param {string} username.form.required - username to login/register with
   * @tags user
   * @return {User} 200 - success response - application/json
   */
  async login(req, res) {
    const { username } = req.body;

    const existingUser = User.find(propEq('username', username));

    if (existingUser) {
      req.session.username = username;
      res.send(existingUser);

      return;
    }

    const newUser = await User.create({ username });

    res.send(newUser);
  }

  /**
   * GET /api/user/logout
   * @summary Logout
   * @tags user
   * @return {string} 201 - success response - application/json
   */
  async logout(req, res) {
    delete req.session.username;
    res.status(201).send();
  }

  /**
   * GET /api/user
   * @summary List users
   * @tags user
   * @return {User} 200 - success response - application/json
   */
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
