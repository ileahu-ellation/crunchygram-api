import {
  always,
  compose,
  identity,
  includes,
  not,
  prop,
  propEq,
  toLower,
  trim,
  when,
} from 'ramda';
import Router from '../util/Router.js';
import Post from '../../db/entities/Post.js';
import Like from '../../db/entities/Like.js';
import { GET } from '../util/constants.js';
import requireAuthMiddleware from '../middlewares/requireAuthMiddleware.js';
import { queryValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import { querySanitizerMiddleware } from '../middlewares/sanitizeMiddleware.js';
import { numberValidator } from '../util/validator.js';
import { numberSanitizer } from '../util/sanitizer.js';

class PostRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      GET,
      '',
      // requireAuthMiddleware(),
      querySanitizerMiddleware({
        limit: numberSanitizer,
        start: numberSanitizer,
        search: when(identity, compose(toLower, trim)),
      }),
      queryValidatorMiddleware({
        limit: [numberValidator],
        start: [numberValidator],
      }),
      this.list,
    );
    this.addRoute(
      GET,
      '/liked',
      requireAuthMiddleware(),
      querySanitizerMiddleware({
        limit: numberSanitizer,
        start: numberSanitizer,
      }),
      queryValidatorMiddleware({
        limit: [numberValidator],
        start: [numberValidator],
      }),
      this.liked,
    );
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

    const posts = Post.list(
      when(always(search), compose(includes(search), toLower, prop('name'))),
    ).slice(start, start + limit);

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
    const { limit = 10, start = 0 } = req.query;

    const likedPostIds = Like.list(propEq('username', username)).map(
      prop('postId'),
    );
    const posts = Post.list(({ id }) => likedPostIds.includes(id)).slice(
      start,
      start + limit,
    );

    res.send(posts);
  }
}

export default PostRouter;
