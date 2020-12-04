import {ActionType} from "../action/action";
import {extend} from "../../utils/utils";
import {MAXIMUM_USERS_PER_PAGE} from "../../utils/const";

const initialState = {
  users: [],
  currentPageUsers: [],
  selectedUser: {},
  pages: 0,
  currentPage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      const receivedUsers = action.payload;

      return extend(
          state,
          {
            users: receivedUsers,
          }
      );
    case ActionType.UPDATE_CURRENT_USERS:
      const users = state.users;
      const firstIndex = (state.currentPage - 1) * MAXIMUM_USERS_PER_PAGE;
      const secondIndex = state.currentPage * MAXIMUM_USERS_PER_PAGE;
      const aCurrentPagePeople = users.slice(firstIndex, secondIndex);
      return extend(
          state,
          {
            currentPageUsers: aCurrentPagePeople
          }
      );
    case ActionType.UPDATE_PAGES_COUNT:
      const aUsers = state.users;
      const pagesCount = Math.ceil(aUsers.length / MAXIMUM_USERS_PER_PAGE);
      return extend(
          state,
          {
            pages: pagesCount
          }
      );
    case ActionType.SELECT_USER:
      return extend(
          state,
          {
            selectedUser: action.payload
          }
      );
    case ActionType.ADD_USER:
      const oldUsers = state.users;

      const peopleUpdated = [
        action.payload,
        ...oldUsers
      ];

      const aPagesUpdated = Math.ceil(peopleUpdated.length / MAXIMUM_USERS_PER_PAGE);
      const aCurrentPagePeopleUpdated = peopleUpdated.slice(0, MAXIMUM_USERS_PER_PAGE);

      return extend(
          state,
          {
            users: peopleUpdated,
            currentPageUsers: aCurrentPagePeopleUpdated,
            pages: aPagesUpdated,
            currentPage: 1
          }
      );
    case ActionType.CHANGE_PAGE:
      return extend(
          state,
          {
            currentPage: action.payload
          }
      );
    case ActionType.FIRST_PAGE:
      return extend(
          state,
          {
            currentPage: 1
          }
      );
    case ActionType.LAST_PAGE:
      const lastPage = state.pages;
      return extend(
          state,
          {
            currentPage: lastPage
          }
      );
    case ActionType.NEXT_PAGE:
      const nextPage = state.currentPage + 1;
      return extend(
          state,
          {
            currentPage: nextPage
          }
      );
    case ActionType.PREV_PAGE:
      const prevPage = state.currentPage - 1;
      return extend(
          state,
          {
            currentPage: prevPage
          }
      );
  }

  return state;
};

export default reducer;
