import { always, compose, includes, prop, propEq, toLower, when } from 'ramda';
import Router from '../util/Router.js';
import Post from '../../db/entities/Post.js';
import Like from '../../db/entities/Like.js';
import { GET } from '../util/constants.js';
import requireAuthMiddleware from '../middlewares/requireAuthMiddleware.js';
import { queryValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import { querySanitizerMiddleware } from '../middlewares/sanitizeMiddleware.js';
import { numberValidator } from '../util/validator.js';
import { numberSanitizer, stringSanitizer } from '../util/sanitizer.js';

class PostRouter extends Router {
  constructor(props) {
    super(props);

    const paginationValidator = queryValidatorMiddleware({
      limit: [numberValidator],
      start: [numberValidator],
    });
    const paginationSanitizer = querySanitizerMiddleware({
      limit: numberSanitizer,
      start: numberSanitizer,
    });

    this.addRoute(
      GET,
      '',
      requireAuthMiddleware(),
      paginationSanitizer,
      querySanitizerMiddleware({ search: stringSanitizer }),
      paginationValidator,
      this.list,
    );
    this.addRoute(
      GET,
      '/liked',
      requireAuthMiddleware(),
      paginationSanitizer,
      paginationValidator,
      this.likedByMe,
    );
    this.addRoute(
      GET,
      '/liked/:username',
      requireAuthMiddleware(),
      paginationSanitizer,
      paginationValidator,
      this.likedByMe,
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
  async likedByMe(req, res) {
    const { username } = req.cookies;
    const { limit = 10, start = 0 } = req.query;

    const posts = Post.getLikedByUsername({ username }).slice(
      start,
      start + limit,
    );

    res.send(posts);
  }

  /**
   * GET /api/post/liked/:username
   * @summary Get user's liked posts by username
   * @tags post
   * @return {array<Post>} 200 - success response - application/json
   */
  async likedByUser(req, res) {
    const { username } = req.params;
    const { limit = 10, start = 0 } = req.query;

    const posts = Post.getLikedByUsername({ username }).slice(
      start,
      start + limit,
    );

    res.send(posts);
  }
}

export default PostRouter;
