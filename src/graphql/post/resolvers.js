const post = () => {
  return {
    id: '1',
    title: 'Post 1',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Post 2',
    },
    {
      id: '2',
      title: 'Post 2',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
