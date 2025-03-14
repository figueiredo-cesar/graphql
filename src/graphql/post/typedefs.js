import { gql } from 'apollo-server';

export const postTypedefs = gql`
  extend type Query {
    post(id: ID!): PostResult!
    posts(input: ApiFilterInput): [Post!]!
  }

  union PostResult = PostNotFoundError | PostTimeoutError | Post

  interface PostError {
    statusCode: Int!
    message: String!
  }

  type PostNotFoundError implements PostError {
    statusCode: Int!
    message: String!
    postId: String!
  }

  type PostTimeoutError implements PostError {
    statusCode: Int!
    message: String!
    timeout: Int!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    user: User
    indexRef: Int!
    createdAt: String!
    unixTimestamp: String
  }
`;
