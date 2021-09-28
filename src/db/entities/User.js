import Entity from '../util/Entity.js';
import Like from './Like.js';
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

    return super.create({
      ...props,
      avatar,
    });
  }

  find(selector) {
    const rawUser = super.find(selector);

    if (!rawUser) {
      return null;
    }

    const likesCount = Like.list(propEq('username', rawUser.username)).length;

    return {
      ...rawUser,
      likesCount,
    };
  }
}

export default new User();
