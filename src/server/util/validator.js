import BadRequestException from '../exceptions/BadRequestException.js';
import { compose, not } from 'ramda';

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

const numberValidator = {
  check: compose(not, Number.isNaN),
  message: () => 'must be a number',
};

export { createValidator, numberValidator };
