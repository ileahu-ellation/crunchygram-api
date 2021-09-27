import {
  when,
  identity,
  not,
  compose,
  trim,
  always,
  filter,
  prop,
  toLower,
  includes,
  slice,
} from 'ramda';
import Router from '../util/Router.js';
import Post from '../../db/entities/Post.js';
import { GET } from '../util/constants.js';
import requireAuthMiddleware from '../middlewares/authenticationMiddleware.js';
import { queryValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import { querySanitizerMiddleware } from '../middlewares/sanitizeMiddleware.js';

class PostRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      GET,
      '',
      requireAuthMiddleware(),
      querySanitizerMiddleware({
        limit: when(identity, Number),
        start: when(identity, Number),
        search: when(identity, compose(toLower, trim)),
      }),
      queryValidatorMiddleware({
        limit: [
          {
            check: compose(not, Number.isNaN),
            message: () => 'must be a number',
          },
        ],
        start: [
          {
            check: compose(not, Number.isNaN),
            message: () => 'must be a number',
          },
        ],
      }),
      this.list,
    );
  }

  async list(req, res) {
    const { limit = 10, start = 0, search = '' } = req.query;

    const posts = compose(
      slice(start, start + limit),
      when(
        always(search),
        filter(compose(includes(search), toLower, prop('name'))),
      ),
      Post.list,
    )();

    res.send(posts);
  }
}

export default PostRouter;
