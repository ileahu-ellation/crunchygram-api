import { always, compose, includes, prop, toLower, when } from 'ramda';
import Router from '../util/Router.js';
import Post from '../../db/entities/Post.js';
import { GET } from '../util/constants.js';
import requireAuthMiddleware from '../middlewares/requireAuthMiddleware.js';
import {
  paramsValidatorMiddleware,
  queryValidatorMiddleware,
} from '../middlewares/validatorMiddleware.js';
import { querySanitizerMiddleware } from '../middlewares/sanitizeMiddleware.js';
import { numberValidator } from '../util/validator.js';
import { numberSanitizer, stringSanitizer } from '../util/sanitizer.js';
import { postExistsValidator } from '../../db/util/validators.js';

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
      // requireAuthMiddleware(),
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
      // requireAuthMiddleware(),
      paginationSanitizer,
      paginationValidator,
      this.likedByUser,
    );
    this.addRoute(
      GET,
      '/:id',
      paramsValidatorMiddleware({
        id: [postExistsValidator],
      }),
      this.post,
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
    const { username } = req.cookies;

    const posts = Post.list(
      when(always(search), compose(includes(search), toLower, prop('name'))),
      {
        username,
      },
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

  /**
   * GET /api/post/:id
   * @summary Get post by id
   * @tags post
   * @return {Post} 200 - success response - application/json
   */

  async post(req, res) {
    const { id } = req.params;
    const { username } = req.cookies;

    const post = Post.getPost({ id, username });

    res.send(post);
  }
}

export default PostRouter;
