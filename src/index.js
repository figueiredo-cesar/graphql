import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User
      users: [User]
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '387483-34983984',
          userName: 'Cesar Dev',
        };
      },
      users: () => {
        return [
          {
            id: '387483-63546354',
            userName: 'Cesar Dev',
          },
          {
            id: '387483-5647556',
            userName: 'Cesar Dev',
          },
          {
            id: '387483-34983984',
            userName: 'Cesar Dev',
          },
        ];
      },
    },
  },
});
server.listen(3000).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
