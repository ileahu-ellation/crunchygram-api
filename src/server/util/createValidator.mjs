import BadRequestException from '../exceptions/BadRequestException.mjs';

const createValidator = options => {
  return data => {
    const errors = [];

    Object.entries(options).forEach(([key, checks]) => {
      const value = data[key];

      for (const { check, message } of checks) {
        try {
          if (!check(value)) {
            throw new Error();
          }
        } catch (e) {
          errors.push({
            key,
            message: message(value),
          });
          continue;
        }
      }
    });

    if (errors.length) {
      throw new BadRequestException({ errors });
    }
  };
};

export default createValidator;
