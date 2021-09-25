import HttpException from './HttpException.js';

class NotFoundException extends HttpException {
  constructor() {
    super({
      statusCode: 404,
      message: 'Not Found',
    });
  }
}

export default NotFoundException;
