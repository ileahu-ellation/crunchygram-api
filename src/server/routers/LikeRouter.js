import { compose, flip, includes, prop, propEq } from 'ramda';
import Router from '../util/Router.js';
import Like from '../../db/entities/Like.js';
import Post from '../../db/entities/Post.js';
import { GET, POST } from '../util/constants.js';
import { paramsValidatorMiddleware } from '../middlewares/validatorMiddleware.js';
import requireAuthMiddleware from '../middlewares/authenticationMiddleware.js';

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

    this.addRoute(GET, '/me', requireAuthMiddleware(), this.list);
  }

  async toggle(req, res) {
    const { postId } = req.params;
    const { username } = req.session;

    const like = await Like.toggle({ username, postId });

    if (like) {
      res.send(like);

      return;
    }

    res.status(201).send();
  }

  async list(req, res) {
    const { username } = req.session;

    const likedPostIds = Like.list(propEq('username', username)).map(
      prop('postId'),
    );
    const posts = Post.list(({ id }) => likedPostIds.includes(id));

    res.send(posts);
  }
}

export default LikeRouter;
