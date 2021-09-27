const createSanitizerMiddleware = prop => options => {
  return (req, res, next) => {
    Object.entries(options).forEach(([key, sanitizer]) => {
      try {
        req[prop][key] = sanitizer(req[prop][key]);
      } catch (e) {
        console.log('Sanitize error', e);
      }
    });

    next();
  };
};

const querySanitizerMiddleware = createSanitizerMiddleware('query');
const bodySanitizerMiddleware = createSanitizerMiddleware('body');

export { querySanitizerMiddleware, bodySanitizerMiddleware };
