const user = async (_, { id }, { getUsers }) => {
  const user = await getUsers('/' + id);

  return user.json();
};

// obj, arg, context, info
const users = async (_, { input }, { getUsers }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const users = await getUsers('/?' + apiFiltersInput);
  return users.json();
};

const posts = ({ id }, _, { postDataLoader }) => {
  return postDataLoader.load(id);
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
  User: { posts },
};
