import { prop, propEq, allPass } from 'ramda';
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
 * @property {number} likesCount
 * @property {number} commentsCount
 * @property {boolean} isUserLiked
 * @property {array<Comment>} comments
 */
class Post extends Entity {
  entity = 'posts';

  list(selector, options) {
    const likesMap = Like.list().reduce(
      (acc, { postId, username }) => ({
        ...acc,
        [postId]: {
          count: (acc[postId]?.count || 0) + 1,
          isUserLiked: username === options.username,
        },
      }),
      {},
    );
    const commentLikesMap = {};
    const postCommentsMap = {};
    Comment.list().forEach(({ postId, ...comment }) => {
      commentLikesMap[postId] = (commentLikesMap[postId] || 0) + 1;

      if (!postCommentsMap[postId]) {
        postCommentsMap[postId] = [];
      }

      postCommentsMap[postId].push(comment);
    });

    const rawPosts = super.list(selector);

    return rawPosts.map(post => ({
      ...post,
      likesCount: likesMap[post.id]?.count || 0,
      isUserLiked: Boolean(likesMap[post.id]?.isUserLiked),
      commentsCount: commentLikesMap[post.id] || 0,
      comments: postCommentsMap[post.id] || [],
    }));
  }

  getLikedByUsername({ username }) {
    const likedPostIds = Like.list(propEq('username', username)).map(
      prop('postId'),
    );

    return this.list(({ id }) => likedPostIds.includes(id));
  }
}

export default new Post();
