// Actions
export const setUser = ({ name, id, email }) => ({
  type: 'SET_USER',
  payload: {
    name,
    id,
    email,
  },
});

export const setUsers = users => ({
  type: 'SET_USERS',
  payload: users,
});

export const setLoading = bool => ({
  type: 'SET_LOADING',
  payload: bool,
});

export const getSpaceships = () => ({
  type: 'GET_STARSHIPS',
});
