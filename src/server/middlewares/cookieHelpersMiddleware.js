const cookieHelpersMiddleware = () => (req, res, next) => {
  const secure = !req.headers['user-agent'].toLowerCase().includes('postman');

  res.setCookie = (key, value) => {
    res.cookie(key, value, {
      maxAge: 90000000,
      httpOnly: false,
      sameSite: 'none',
      secure,
    });
  };

  next();
};

export default cookieHelpersMiddleware;
