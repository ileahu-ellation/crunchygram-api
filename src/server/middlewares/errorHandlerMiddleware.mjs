const errorHandlerMiddleware = () => (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    statusCode,
    message: err.message,
    ...err,
  });
};

export default errorHandlerMiddleware;
