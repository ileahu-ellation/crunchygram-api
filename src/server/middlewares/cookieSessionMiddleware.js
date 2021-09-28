import Cookie from 'cookies';

const cookieSessionMiddleware = () => (req, res, next) => {
  req.cookie = new Cookie(req, res, {});

  next();
};

export default cookieSessionMiddleware;
