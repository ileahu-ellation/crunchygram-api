import { prop } from 'ramda';

const importData = key =>
  import(`../../constants/${key}.js`).then(prop('default'));

const getDefaultDbData = async () => {
  const users = await importData('users');
  const posts = await importData('posts');
  const likes = await importData('likes');
  const comments = await importData('comments');

  return {
    users,
    likes,
    comments,
    posts,
  };
};

export default getDefaultDbData;
