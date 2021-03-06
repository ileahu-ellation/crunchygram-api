import randomID from './randomID.js';
import LowDB from '../index.js';
import { compose, not } from 'ramda';

class Entity {
  entity;

  constructor() {
    ['list', 'instance', 'create', 'delete'].forEach(key => {
      this[key] = this[key].bind(this);
    });
  }

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

  count(selector) {
    return this.list(selector).length;
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

  async delete(selector) {
    const data = this.instance().filter(compose(not, selector));

    await LowDB.setEntityData(this.entity, data);
  }
}

export default Entity;
