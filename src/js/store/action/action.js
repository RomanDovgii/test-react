export const ActionType = {
  FILTER: `FILTER`,
  ADD_USER: `ADD_USER`,
  SELECT_USER: `SELECT_USER`,
  FILTER_BY: `FILTER_BY`,
  CHANGE_PAGE: `CHANGE_PAGE`,
  FETCH_USERS: `FETCH_USERS`,
  FLUSH_SELECTED: `FLUSH_SELECTED`
};

export const fetchUsers = (users) => ({
  type: ActionType.FETCH_USERS,
  payload: users
});

export const selectUser = (user) => ({
  type: ActionType.SELECT_USER,
  payload: user
});

export const addUser = (user) => ({
  type: ActionType.ADD_USER,
  payload: user
});
