import randomID from '../../util/randomID.js';
import LowDB from '../index.js';

class Entity {
  entity;

  instance() {
    return LowDB.getEntityInstance(this.entity);
  }

  list(selector) {
    const data = this.instance();

    if (!selector) {
      return data;
    }

    return data.filter(selector);
  }

  find(selector) {
    return this.instance().find(selector);
  }

  async create(props) {
    const data = {
      id: randomID(),
      ...props,
    };

    this.instance().push(data);

    await LowDB.db.write();

    return data;
  }
}

export default Entity;
