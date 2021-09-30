import { propEq } from 'ramda';
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

export { postExistsValidator, userExistsValidator };
