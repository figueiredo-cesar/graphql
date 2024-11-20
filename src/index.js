import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema.js';
import fetch from 'node-fetch';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});
server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
