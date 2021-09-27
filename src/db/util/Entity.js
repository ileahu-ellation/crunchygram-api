import randomID from './randomID.js';
import LowDB from '../index.js';
import { compose, not, propEq } from 'ramda';

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

  async delete(predicate) {
    const data = this.instance().filter(compose(not, predicate));

    await LowDB.setEntityData(this.entity, data);
  }
}

export default Entity;
