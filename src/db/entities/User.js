import Entity from '../util/Entity.js';
import sample from '../../util/sample.js';
import avatars from '../../constants/avatars.js';

class User extends Entity {
  entity = 'users';

  async create(props) {
    const avatar = sample(avatars);

    return super.create({
      ...props,
      avatar,
    });
  }
}

export default new User();
