export const ActionType = {
  FILTER: `FILTER`,
  SEARCH: `SEARCH`,
  ADD_USER: `ADD_USER`,
  SELECT_USER: `SELECT_USER`,
  CHANGE_PAGE: `CHANGE_PAGE`,
  FETCH_USERS: `FETCH_USERS`,
  FLUSH_DATA: `FLUSH_DATA`,
  FLUSH_SELECTED: `FLUSH_SELECTED`,
  FIRST_PAGE: `FIRST_PAGE`,
  NEXT_PAGE: `NEXT_PAGE`,
  PREV_PAGE: `PREV_PAGE`,
  LAST_PAGE: `LAST_PAGE`,
  UPDATE_CURRENT_USERS: `UPDATE_CURRENT_USERS`,
  UPDATE_PAGES_COUNT: `UPDATE_PAGES_COUNT`
};

export const fetchUsers = (users) => ({
  type: ActionType.FETCH_USERS,
  payload: users
});

export const flushData = () => ({
  type: ActionType.FLUSH_DATA
});

export const updateCurrentUsers = () => ({
  type: ActionType.UPDATE_CURRENT_USERS
});

export const updatePagesCount = () => ({
  type: ActionType.UPDATE_PAGES_COUNT
});

export const selectUser = (user) => ({
  type: ActionType.SELECT_USER,
  payload: user
});

export const addUser = (user) => ({
  type: ActionType.ADD_USER,
  payload: user
});

export const changePage = (page) => ({
  type: ActionType.CHANGE_PAGE,
  payload: page
});

export const toFirstPage = () => ({
  type: ActionType.FIRST_PAGE
});

export const toLastPage = () => ({
  type: ActionType.LAST_PAGE
});

export const toNextPage = () => ({
  type: ActionType.NEXT_PAGE
});

export const toPrevPage = () => ({
  type: ActionType.PREV_PAGE
});

export const filterUsers = (filterInfo) => ({
  type: ActionType.FILTER,
  payload: filterInfo
});

export const searchUsers = (searchString) => ({
  type: ActionType.SEARCH,
  payload: searchString
});
