import HttpException from './HttpException.mjs';

class NotFoundException extends HttpException {
  constructor() {
    super({
      statusCode: 404,
      message: 'Not Found',
    });
  }
}

export default NotFoundException;
