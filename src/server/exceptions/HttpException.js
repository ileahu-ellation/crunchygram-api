class HttpException extends Error {
  statusCode;
  message;

  constructor({ message, statusCode, ...rest }) {
    super(message || 'Http Exception');
    this.statusCode = statusCode;
    this.message = message;

    Object.entries(rest).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

export default HttpException;
