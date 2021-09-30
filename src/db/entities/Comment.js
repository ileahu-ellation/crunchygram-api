import Entity from '../util/Entity.js';

/**
 * Comment type
 * @typedef {object} Comment
 * @property {string} id
 * @property {string} text
 * @property {string} postId
 */
class Comment extends Entity {
  entity = 'comments';
}

export default new Comment();