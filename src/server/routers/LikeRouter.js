import { lte, length, compose, includes, prop, propEq, allPass } from 'ramda';
import Router from '../util/Router.js';
import Like from '../../db/entities/Like.js';
import Post from '../../db/entities/Post.js';
import { POST } from '../util/constants.js';
import { bodyValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import requireAuthMiddleware from '../middlewares/authenticationMiddleware.js';

class LikeRouter extends Router {
  constructor(props) {
    super(props);

    this.addRoute(
      POST,
      '/toggle',
      requireAuthMiddleware(),
      bodyValidatorMiddleware({
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

  async toggle(req, res) {
    const { postId } = req.body;
    const { username } = req.session;

    const like = await Like.toggle({ username, postId });

    if (like) {
      res.send(like);

      return;
    }

    res.status(201).send();
  }
}

export default LikeRouter;
