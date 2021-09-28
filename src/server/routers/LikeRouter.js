import { propEq } from 'ramda';
import Router from '../util/Router.js';
import Like from '../../db/entities/Like.js';
import Post from '../../db/entities/Post.js';
import { POST } from '../util/constants.js';
import { paramsValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import requireAuthMiddleware from '../middlewares/requireAuthMiddleware.js';

class LikeRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      POST,
      '/toggle/:postId',
      requireAuthMiddleware(),
      paramsValidatorMiddleware({
        postId: [
          {
            check: Boolean,
            message: () => 'required value',
          },
          {
            check: value => Post.find(propEq('id', value)),
            message: value => `post with id "${value}" does not exist`,
          },
        ],
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
    const { username } = req;

    const like = await Like.toggle({ username, postId });

    if (like) {
      res.send(like);

      return;
    }

    res.status(201).send();
  }
}

export default LikeRouter;
