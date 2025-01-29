const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);

  // fins didaticos
  if (Math.random() > 0.5) {
    return {
      statusCode: '500',
      message: 'Post timeout',
      timeout: 123,
    };
  }

  if (response.status === 404) {
    return {
      statusCode: '404',
      message: 'Post not found',
      postId: id,
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

const user = async ({ userId }, _, { userDataLoader }) => {
  console.log('oi', userId);
  return userDataLoader.load(userId);
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    user,
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    },
  },

  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      return null;
    },
  },
};
