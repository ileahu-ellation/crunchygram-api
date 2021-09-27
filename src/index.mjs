import dotenv from 'dotenv';
import Server from './server/index.js';
import UserRouter from './server/routers/UserRouter.js';
import LikeRouter from './server/routers/LikeRouter.js';
import LowDB from './db/index.js';
import dbDefaults from './dbDefaults.js';

dotenv.config();

(async () => {
  const port = process.env.PORT;
  const server = new Server({
    port,
    path: '/api',
    routers: [
      new UserRouter({ path: '/user' }),
      new LikeRouter({ path: '/like' }),
    ],
  });
  const lowDB = new LowDB({
    filename: process.env.LOW_DB_FILEPATH,
    defaults: dbDefaults,
  });

  await lowDB.setup();
  await server.start();

  console.log('\nListening on port', port);
})();
