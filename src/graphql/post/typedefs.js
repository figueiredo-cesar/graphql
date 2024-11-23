import { gql } from 'apollo-server';

export const postTypedefs = gql`
  extend type Query {
    post(id: ID!): PostResult!
    posts(input: ApiFilterInput): [Post!]!
  }

  union PostResult = PostNotFoundError | Post

  type PostNotFoundError {
    statusCode: Int!
    message: String!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    # user: User!
    indexRef: Int!
    createdAt: String!
    unixTimestamp: String
  }
`;
