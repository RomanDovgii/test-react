export const ActionType = {
  FILTER: `FILTER`,
  ADD_PERSON: `ADD_PERSON`,
  SELECT_PERSON: `SELECT_PERSON`,
  FILTER_BY: `FILTER_BY`,
  CHANGE_PAGE: `CHANGE_PAGE`,
  FETCH_USERS: `FETCH_USERS`,
  FLUSH_SELECTED: `FLUSH_SELECTED`
};

export const fetchUsers = () => ({
  type: ActionType.FETCH_USERS
});
