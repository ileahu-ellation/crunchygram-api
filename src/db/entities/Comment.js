import { propEq } from 'ramda';
import Entity from '../util/Entity.js';
import User from './User.js';

/**
 * Comment type
 * @typedef {object} Comment
 * @property {string} id
 * @property {string} text
 * @property {string} postId
 * @property {string} username
 * @property {string} avatar
 */
class Comment extends Entity {
  entity = 'comments';

  list(selector) {
    const userAvatarsMap = User.instance().reduce(
      (acc, { username, avatar }) => ({
        ...acc,
        [username]: avatar,
      }),
      {},
    );

    return super.list(selector).map(comment => ({
      ...comment,
      avatar: userAvatarsMap[comment.username],
    }));
  }

  async create(props) {
    let comment = await super.create(props);

    comment.avatar = User.find(propEq('username', props.username)).avatar;

    return comment;
  }
}

export default new Comment();
