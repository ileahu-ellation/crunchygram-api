import Entity from '../util/Entity.js';
import Like from './Like.js';
import { propEq } from 'ramda';

/**
 * Post type
 * @typedef {object} Post
 * @property {string} id
 * @property {string} name
 * @property {string} image
 * @property {string} avatar
 * @property {string} likesCount
 */
class Post extends Entity {
  entity = 'posts';

  list(selector) {
    const likesCountMap = Like.list().reduce(
      (acc, { postId }) => ({
        ...acc,
        [postId]: (acc[postId] || 0) + 1,
      }),
      {},
    );

    const rawPosts = super.list(selector);

    return rawPosts.map(post => ({
      ...post,
      likesCount: likesCountMap[post.id] || 0,
    }));
  }
}

const postExistsValidator = {
  check: value => Post.find(propEq('id', value)),
  message: value => `post with id "${value}" does not exist`,
};

export { postExistsValidator };

export default new Post();
