import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen(3000).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
