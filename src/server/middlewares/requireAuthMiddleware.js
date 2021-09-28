import UnauthorizedException from '../exceptions/UnauthorizedException.js';

const requireAuthMiddleware = () => (req, res, next) => {
  const { username } = req.cookies;

  if (!username) {
    next(new UnauthorizedException());

    return;
  }

  req.username = username;

  next();
};

export default requireAuthMiddleware;
