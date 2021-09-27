import Entity from '../util/Entity.js';

/**
 * Post type
 * @typedef {object} Post
 * @property {string} id
 * @property {string} name
 * @property {string} image
 * @property {string} avatar
 */
class Post extends Entity {
  entity = 'posts';
}

export default new Post();
