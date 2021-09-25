import dotenv from 'dotenv';
import Server from './server/index.mjs';
import UserRouter from './server/routers/UserRouter.mjs';
import LowDB from './db/index.mjs';

dotenv.config();

(async () => {
  const port = process.env.PORT;
  const server = new Server({
    port,
    path: '/api',
    routers: [new UserRouter({ path: '/user' })],
  });
  const lowDB = new LowDB({
    filename: process.env.LOW_DB_FILEPATH,
  });

  await lowDB.setup();
  await server.start();

  console.log('\nListening on port', port);
})();
