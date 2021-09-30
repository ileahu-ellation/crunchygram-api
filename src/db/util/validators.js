import { propEq } from 'ramda';
import Post from '../entities/Post.js';

const postExistsValidator = {
  check: value => Post.find(propEq('id', value)),
  message: value => `post with id "${value}" does not exist`,
};

export { postExistsValidator };
