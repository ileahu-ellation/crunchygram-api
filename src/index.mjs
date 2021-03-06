import dotenv from 'dotenv';
import Server from './server/index.js';
import UserRouter from './server/routers/UserRouter.js';
import LikeRouter from './server/routers/LikeRouter.js';
import PostRouter from './server/routers/PostRouter.js';
import CommentRouter from './server/routers/CommentRouter.js';
import LowDB from './db/index.js';

dotenv.config();

(async () => {
  const port = process.env.PORT;
  const server = new Server({
    port,
    path: '/api',
    routers: [
      new UserRouter({ path: '/user' }),
      new LikeRouter({ path: '/like' }),
      new PostRouter({ path: '/post' }),
      new CommentRouter({ path: '/comment' }),
    ],
  });
  const lowDB = new LowDB({
    filename: process.env.LOW_DB_FILEPATH,
  });

  await lowDB.setup();
  await server.start();

  console.log(`Listening on http://127.0.0.1:${port}`);
})();
