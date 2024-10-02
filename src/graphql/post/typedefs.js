import { gql } from 'apollo-server';

export const postTypedefs = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
  }
`;
