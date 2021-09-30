import Entity from '../util/Entity.js';
import Like from './Like.js';
import Comment from './Comment.js';
import sample from '../../util/sample.js';
import avatars from '../../constants/avatars.js';
import { propEq } from 'ramda';

/**
 * User type
 * @typedef {object} User
 * @property {string} id
 * @property {string} username
 * @property {string} avatar
 * @property {string} likesCount
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
    const likesCount = Like.count(propEq('username', username));
    const commentsCount = Comment.count(propEq('username', username));

    return {
      ...user,
      likesCount,
      commentsCount,
    };
  }
}

export default new User();
