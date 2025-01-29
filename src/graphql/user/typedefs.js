import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFilterInput): [User!]!
  }

  type User {
    id: ID!
    userName: String!
    lastname: String!
    firstname: String!
    indexRef: Int!
    createdAt: String!
    posts: [Post]
  }
`;
