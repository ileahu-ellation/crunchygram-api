import Entity from '../util/Entity.js';
import User from './User.js';
import { allPass, propEq } from 'ramda';

class Like extends Entity {
  entity = 'likes';

  async toggle({ username, postId }) {
    const { id: userId } = User.find(propEq('username', username));
    const selector = allPass([
      propEq('userId', userId),
      propEq('postId', postId),
    ]);

    const existingLike = this.find(
      allPass([propEq('userId', userId), propEq('postId', postId)]),
    );

    if (existingLike) {
      await this.delete(selector);

      return;
    }

    return super.create({
      userId,
      postId,
    });
  }
}

export default new Like();
