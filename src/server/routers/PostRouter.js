import {
  always,
  compose,
  filter,
  identity,
  includes,
  not,
  prop,
  propEq,
  slice,
  toLower,
  trim,
  when,
} from 'ramda';
import Router from '../util/Router.js';
import Post from '../../db/entities/Post.js';
import Like from '../../db/entities/Like.js';
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
      // requireAuthMiddleware(),
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
    this.addRoute(GET, '/liked', requireAuthMiddleware(), this.liked);
  }

  /**
   * GET /api/post
   * @summary List posts
   * @param {string} start.query - default 0
   * @param {string} limit.query - default 10
   * @param {string} search.query - name to search by
   * @tags post
   * @return {array<Post>} 200 - success response - application/json
   */
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

  /**
   * GET /api/post/liked
   * @summary Current user's liked posts
   * @tags post
   * @return {array<Post>} 200 - success response - application/json
   */
  async liked(req, res) {
    const { username } = req.session;

    const likedPostIds = Like.list(propEq('username', username)).map(
      prop('postId'),
    );
    const posts = Post.list(({ id }) => likedPostIds.includes(id));

    res.send(posts);
  }
}

export default PostRouter;
