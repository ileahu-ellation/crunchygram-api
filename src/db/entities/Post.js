import Entity from '../util/Entity.js';
import Like from './Like.js';
import Comment from './Comment.js';

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
    const commentsCountMap = Comment.list().reduce(
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
      commentsCount: commentsCountMap[post.id] || 0,
    }));
  }
}

export default new Post();
