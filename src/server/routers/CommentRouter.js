import Router from '../util/Router.js';
import Comment from '../../db/entities/Comment.js';
import { postExistsValidator } from '../../db/entities/Post.js';
import { POST } from '../util/constants.js';
import { bodyValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import requireAuthMiddleware from '../middlewares/requireAuthMiddleware.js';
import { querySanitizerMiddleware } from '../middlewares/sanitizeMiddleware.js';
import { requiredValue } from '../util/validator.js';
import { stringSanitizer } from '../util/sanitizer.js';

class CommentRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      POST,
      '',
      requireAuthMiddleware(),
      querySanitizerMiddleware({
        text: stringSanitizer,
      }),
      bodyValidatorMiddleware({
        postId: [requiredValue, postExistsValidator],
      }),
      this.toggle,
    );
  }

  /**
   * POST /api/comment
   * @summary Create comment on a post
   * @param {string} text.form.required - comment text
   * @param {string} postId.form.required - Post id
   * @tags comment
   * @return {Comment} 200 - success response on add like - application/json
   */
  async create(req, res) {
    const { postId, text } = req.body;
    const { username } = req.cookies;

    const comment = await Comment.create({
      username,
      postId,
      text,
    });

    res.send(comment);
  }
}

export default CommentRouter;
