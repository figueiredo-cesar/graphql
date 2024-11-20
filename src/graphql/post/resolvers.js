import fetch from 'node-fetch';

const post = async () => {
  return {
    id: '1',
    title: 'Post 1',
  };
};

const posts = async () => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
