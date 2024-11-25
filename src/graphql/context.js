import fetch from 'node-fetch';

const API_URL = 'http://localhost:3000';

export const context = () => {
  return {
    getUsers: (path = '/') => {
      return fetch(API_URL + '/users' + path);
    },
    getPosts: (path = '/') => {
      return fetch(API_URL + '/posts' + path);
    },
  };
};
