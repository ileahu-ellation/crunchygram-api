import UnauthorizedException from '../exceptions/UnauthorizedException.js';

const requireAuthMiddleware = () => (req, res, next) => {
  console.log('req.session.username', req.session.username);

  if (!req.session.username) {
    next(new UnauthorizedException());

    return;
  }

  next();
};

export default requireAuthMiddleware;
