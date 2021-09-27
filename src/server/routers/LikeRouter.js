import { lte, length, compose, includes, prop, propEq, allPass } from 'ramda';
import Router from '../util/Router.js';
import Like from '../../db/entities/Like.js';
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
            check: compose(lte(3), length),
            message: () => 'length must be at least 3 characters',
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
