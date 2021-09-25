import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Low, JSONFile } from 'lowdb';

class LowDB {
  static db;

  constructor({ filename }) {
    const file = join(dirname(fileURLToPath(import.meta.url)), '../..', filename);
    const adapter = new JSONFile(file);

    LowDB.db = new Low(adapter);
  }

  #prepare() {
    LowDB.db.data = LowDB.db.data || {
      users: [],
      posts: [],
      comments: [],
    };
  }

  static getEntityInstance(name) {
    return LowDB.db.data[name];
  }

  async setup() {
    await LowDB.db.read();

    this.#prepare();
  }
}

export default LowDB;
