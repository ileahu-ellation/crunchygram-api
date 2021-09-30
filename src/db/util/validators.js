import { compose, length, lte, propEq } from 'ramda';
import Post from '../entities/Post.js';
import User from '../entities/User.js';

const postExistsValidator = {
  check: value => Post.find(propEq('id', value)),
  message: value => `post with id "${value}" does not exist`,
};

const userExistsValidator = {
  check: value => User.find(propEq('username', value)),
  message: value => `user with username "${value}" does not exist`,
};

const lengthValidator = len => ({
  check: compose(lte(len), length),
  message: () => `length must be at least ${len} characters`,
});

export { postExistsValidator, userExistsValidator, lengthValidator };
