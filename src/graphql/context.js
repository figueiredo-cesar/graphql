import fetch from 'node-fetch';
import { makeUserDataLoader } from './user/dataloaders.js';
import { makePostDataLoader } from './post/dataloaders.js';

const API_URL = 'http://localhost:3000';

export const context = () => {
  return {};
};
