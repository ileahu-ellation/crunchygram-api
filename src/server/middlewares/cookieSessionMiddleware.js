import cookieSession from 'cookie-session';

const cookieSessionMiddleware = () =>
  cookieSession({
    name: 'session',
    keys: ['cr'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  });

export default cookieSessionMiddleware;
