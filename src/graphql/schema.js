import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typedefs.js';
import { userResolvers } from './user/resolvers.js';
import { postTypedefs } from './post/typedefs.js';
import { postResolvers } from './post/resolvers.js';
import { apiFiltersTypeDefs } from './api-filters/typedefs.js';
import { apiFiltersResolvers } from './api-filters/resolvers.js';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypedefs,
  apiFiltersTypeDefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
];
