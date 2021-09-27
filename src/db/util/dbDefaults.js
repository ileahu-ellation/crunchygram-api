const getDefaultDbData = async () => {
  const users = await import('../../constants/users.js').then(
    data => data.default,
  );
  const posts = await import('../../constants/posts.js').then(
    data => data.default,
  );

  return {
    users,
    posts,
    comments: [],
    likes: [],
  };
};

export default getDefaultDbData;
