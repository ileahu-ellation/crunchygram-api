const accessControlMiddleware = () => (req, res, next) => {
  const { origin } = req.headers;

  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  return next();
};

export default accessControlMiddleware;
