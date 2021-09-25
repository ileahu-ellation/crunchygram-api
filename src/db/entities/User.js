import LowDB from '../index.js';

const list = () => LowDB.getEntityInstance('users');

const create = async ({ username }) => {
  list().push({ username });

  await LowDB.db.write();
};

export { list, create };
