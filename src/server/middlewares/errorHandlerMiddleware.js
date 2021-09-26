const errorHandlerMiddleware = () => (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  const data = { statusCode, message, ...err };

  console.log('Error', err);

  res.status(statusCode).json(data);
};

export default errorHandlerMiddleware;
