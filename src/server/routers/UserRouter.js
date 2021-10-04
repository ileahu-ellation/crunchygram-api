import { compose, includes, length, lte, prop, propEq } from 'ramda';
import Router from '../util/Router.js';
import User from '../../db/entities/User.js';
import { GET, POST } from '../util/constants.js';
import {
  bodyValidatorMiddleware,
  paramsValidatorMiddleware,
} from '../middlewares/validatorMiddleware.js';
import requireAuthMiddleware from '../middlewares/requireAuthMiddleware.js';
import {
  userExistsValidator,
  lengthValidator,
} from '../../db/util/validators.js';

class UserRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      POST,
      '/login',
      bodyValidatorMiddleware({ username: [lengthValidator(3)] }),
      this.login,
    );

    this.addRoute(GET, '/logout', this.logout);
    this.addRoute(GET, '', /*requireAuthMiddleware(),*/ this.list);
    this.addRoute(GET, '/me', requireAuthMiddleware(), this.getMe);
    this.addRoute(
      GET,
      '/:username',
      paramsValidatorMiddleware({
        username: [userExistsValidator],
      }),
      this.getUserByUsername,
    );
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
      res.setCookie('username', username);
      res.send(existingUser);

      return;
    }

    const newUser = await User.create({ username });

    res.setCookie('username', username);
    res.send(newUser);
  }

  /**
   * POST /api/user/:username
   * @summary Get user data by username
   * @tags user
   * @return {User} 200 - success response - application/json
   */
  async getUserByUsername(req, res) {
    const { username } = req.params;
    const user = User.find(propEq('username', username));

    res.send(user);
  }

  /**
   * POST /api/user/me
   * @summary Get my user data
   * @tags user
   * @return {User} 200 - success response - application/json
   */
  async getMe(req, res) {
    const { username } = req.cookies;
    const user = User.find(propEq('username', username));

    res.send(user);
  }

  /**
   * GET /api/user/logout
   * @summary Logout
   * @tags user
   * @return {string} 201 - success response - application/json
   */
  async logout(req, res) {
    res.setCookie('username', '');
    res.status(201).send();
  }

  /**
   * GET /api/user
   * @summary List users
   * @param {string} search.query - username to search by
   * @tags user
   * @return {User} 200 - success response - application/json
   */
  async list(req, res) {
    const { search } = req.query;
    const data = await User.list();

    if (!search) {
      res.send(data);

      return;
    }

    res.send(data.filter(compose(includes(search), prop('username'))));
  }
}

export default UserRouter;
