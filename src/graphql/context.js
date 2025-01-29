import fetch from 'node-fetch';
import { getUsers } from './user/utils.js';
import { makeUserDataLoader } from './user/dataloaders.js';
import { getPosts } from './post/utils.js';
import { makePostDataLoader } from './post/dataloaders.js';

const API_URL = 'http://localhost:3000';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers(fetch)),
    postDataLoader: makePostDataLoader(getPosts(fetch)),
    getUsers: getUsers(fetch),
    getPosts: getPosts(fetch),
  };
};
