const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);

  if (response.status === 404) {
    return {
      statusCode: '404',
      message: 'Post not found',
    };
  }
  const post = await response.json();
  return post;
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const posts = await getPosts('/?' + apiFiltersInput);
  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    unixTimestamp: ({ createdAt }) => {
      const timestamp = new Date(createdAt).getTime() / 1000;

      return Maath.floor(timestamp);
    },
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.statusCode !== 'undefined') return 'PostNotFoundError';

      if (typeof obj.id !== 'undefined') return 'Post';

      return null;
    },
  },
};
