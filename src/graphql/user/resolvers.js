const user = async (_, { id }, { fecth }) => {
  const user = await fetch('http://localhost:3000/users/' + id);

  return user.json();
};

// obj, arg, context, info
const users = async (_, __, { fecth }) => {
  const users = await fetch('http://localhost:3000/users');
  return users.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
