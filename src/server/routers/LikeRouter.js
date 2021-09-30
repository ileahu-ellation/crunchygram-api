import Router from '../util/Router.js';
import Like from '../../db/entities/Like.js';
import { postExistsValidator } from '../../db/util/validators.js';
import { POST } from '../util/constants.js';
import { paramsValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import requireAuthMiddleware from '../middlewares/requireAuthMiddleware.js';
import { requiredValueValidator } from '../util/validator.js';

class LikeRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      POST,
      '/toggle/:postId',
      requireAuthMiddleware(),
      paramsValidatorMiddleware({
        postId: [requiredValueValidator, postExistsValidator],
      }),
      this.toggle,
    );
  }

  /**
   * POST /api/like/toggle/:postId
   * @summary Toggle post like
   * @tags like
   * @return {array<Like>} 200 - success response on add like - application/json
   * @return {string} 201 - success response on remove like- application/json
   */
  async toggle(req, res) {
    const { postId } = req.params;
    const { username } = req.cookies;

    const like = await Like.toggle({ username, postId });

    if (like) {
      res.send(like);

      return;
    }

    res.status(201).send();
  }
}

export default LikeRouter;
