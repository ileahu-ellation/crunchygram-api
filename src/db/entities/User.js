import Entity from '../util/Entity.js';
import Like from './Like.js';
import Comment from './Comment.js';
import sample from '../../util/sample.js';
import avatars from '../../constants/avatars.js';
import { propEq, prop, compose, tap } from 'ramda';
import Post from './Post.js';

/**
 * User type
 * @typedef {object} User
 * @property {string} id
 * @property {string} username
 * @property {string} avatar
 * @property {number} likesCount
 * @property {number} commentsCount
 * @property {array<Post>} likedPosts
 */
class User extends Entity {
  entity = 'users';

  async create(props) {
    const avatar = sample(avatars);
    const user = await super.create({
      ...props,
      avatar,
    });

    return {
      ...user,
      likesCount: 0,
      commentsCount: 0,
    };
  }

  find(selector) {
    const user = super.find(selector);

    if (!user) {
      return null;
    }

    const { username } = user;

    const commentsCount = Comment.count(propEq('username', username));
    const likes = Like.list(propEq('username', username)).map(prop('postId'));
    const likedPosts = Post.list(({ id }) => likes.includes(id), {
      username,
    });

    return {
      ...user,
      likesCount: likes.length,
      commentsCount,
      likedPosts,
    };
  }
}

export default new User();
