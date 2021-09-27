import Entity from '../util/Entity.js';
import { allPass, propEq } from 'ramda';

/**
 * Like type
 * @typedef {object} Like
 * @property {string} id
 * @property {string} username
 * @property {string} postId
 */
class Like extends Entity {
  entity = 'likes';

  async toggle({ username, postId }) {
    const selector = allPass([
      propEq('username', username),
      propEq('postId', postId),
    ]);

    const existingLike = this.find(
      allPass([propEq('username', username), propEq('postId', postId)]),
    );

    if (existingLike) {
      await this.delete(selector);

      return;
    }

    return super.create({
      username,
      postId,
    });
  }
}

export default new Like();
