import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema.js';
import fetch from 'node-fetch';
import { context } from './graphql/context.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});
server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
