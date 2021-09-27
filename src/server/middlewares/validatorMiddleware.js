import createValidator from '../util/createValidator.js';

const createValidatorMiddleware = prop => options => {
  const validate = createValidator(options);

  return (req, res, next) => {
    try {
      validate(req[prop]);
      next();
    } catch (e) {
      next(e);
    }
  };
};

const queryValidatorMiddleware = createValidatorMiddleware('query');
const bodyValidatorMiddleware = createValidatorMiddleware('body');
const paramsValidatorMiddleware = createValidatorMiddleware('params');

export {
  queryValidatorMiddleware,
  bodyValidatorMiddleware,
  paramsValidatorMiddleware,
};
