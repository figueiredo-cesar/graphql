import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema.js';
import { context } from './graphql/context.js';
import { PostsApi } from './graphql/post/datasources.js';
import { UserApi } from './graphql/user/datasources.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
      userApi: new UserApi(),
    };
  },
});
server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
