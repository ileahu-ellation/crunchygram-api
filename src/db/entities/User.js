import { propEq } from 'ramda';
import LowDB from '../index.js';
import randomID from '../../util/randomID.js';

const instance = () => LowDB.getEntityInstance('users');

const list = (filter = {}) => {
  const data = instance();

  if (!Object.keys(filter).length) {
    return data;
  }

  return data.find(propEq('username', filter.username));
};

const create = async ({ username, avatar }) => {
  const data = {
    id: randomID(),
    username,
    avatar,
  };

  list().push(data);

  await LowDB.db.write();

  return data;
};

export { list, create };
