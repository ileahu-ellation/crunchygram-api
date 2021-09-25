import LowDB from '../index.mjs';

const list = () => LowDB.getEntityInstance('users');

const create = async ({ username }) => {
  list().push({ username });

  await LowDB.db.write();
};

export { list, create };
