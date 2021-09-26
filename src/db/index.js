import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Low, JSONFile } from 'lowdb';

class LowDB {
  static db;
  #defaults;

  constructor({ filename, defaults }) {
    this.#defaults = defaults;
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
      LowDB.db.data = this.#defaults;
      await LowDB.db.write();
    } else {
      console.log('reading data');
    }
  }

  static getEntityInstance(name) {
    return LowDB.db.data[name];
  }

  async setup() {
    await LowDB.db.read();

    await this.#prepare();
  }
}

export default LowDB;
