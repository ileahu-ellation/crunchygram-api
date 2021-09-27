import UnauthorizedException from '../exceptions/UnauthorizedException.js';

const requireAuthMiddleware = () => (req, res, next) => {
  if (!req.session.username) {
    next(new UnauthorizedException());

    return;
  }

  next();
};

export default requireAuthMiddleware;
