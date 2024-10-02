const user = () => {
  return {
    id: '387483-34983984',
    userName: 'Cesar Dev',
  };
};

const users = () => {
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
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
