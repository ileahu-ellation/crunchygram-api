import randomID from './randomID.js';

const getDefaultDbData = async () => {
  const users = await import('../../constants/users.js').then(
    data => data.default,
  );
  const posts = await import('../../constants/posts.js').then(data =>
    data.default.map(item => ({
      id: randomID(),
      ...item,
    })),
  );

  return {
    users,
    posts,
    comments: [],
    likes: [],
  };
};

export default getDefaultDbData;
