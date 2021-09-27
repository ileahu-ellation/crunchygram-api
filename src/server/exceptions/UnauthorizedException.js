import HttpException from './HttpException.js';

class UnauthorizedException extends HttpException {
  constructor() {
    super({
      statusCode: 401,
      message: 'Unauthorized',
    });
  }
}

export default UnauthorizedException;
