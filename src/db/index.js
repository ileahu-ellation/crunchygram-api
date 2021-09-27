import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { JSONFile, Low } from 'lowdb';
import getDefaultDbData from './util/dbDefaults.js';

class LowDB {
  static db;

  constructor({ filename }) {
    const file = join(
      dirname(fileURLToPath(import.meta.url)),
      '../..',
      filename,
    );
    const adapter = new JSONFile(file);

    LowDB.db = new Low(adapter);
  }

  async #prepare() {
    const data = LowDB.db.data;
    if (!data) {
      console.log('creating data');
      LowDB.db.data = await getDefaultDbData();
      await LowDB.db.write();
    } else {
      console.log('reading data');
    }
  }

  static getEntityInstance(name) {
    return LowDB.db.data[name];
  }

  static async setEntityData(name, value) {
    LowDB.db.data[name] = value;

    await LowDB.db.write();
  }

  async setup() {
    await LowDB.db.read();

    await this.#prepare();
  }
}

export default LowDB;
