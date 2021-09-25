import HttpException from './HttpException.js';

class BadRequestException extends HttpException {
  constructor(props) {
    super({
      statusCode: 400,
      message: 'Bad Request',
      ...props,
    });
  }
}

export default BadRequestException;
