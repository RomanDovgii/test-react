import {ActionType} from "../action/action";
import {extend, sortToTop, sortToBot, filterComplexObject} from "../../utils/utils";
import {MAXIMUM_USERS_PER_PAGE, FilterType, FilterDirection} from "../../utils/const";

const initialState = {
  originalUsers: [],
  users: [],
  currentPageUsers: [],
  selectedUser: {},
  pages: 0,
  currentPage: 1,
  filter: `none`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      const receivedUsers = action.payload;

      return extend(
          state,
          {
            users: receivedUsers,
            originalUsers: receivedUsers.slice()
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
            originalUsers: peopleUpdated.slice(),
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
    case ActionType.FILTER:
      const startUsers = state.users;
      const filterType = action.payload.filter;
      const filterDirection = action.payload.direction;
      let filteredUsers;

      switch (filterType) {
        case FilterType.ID:
          filteredUsers = filterDirection === FilterDirection.TO_TOP
            ? startUsers.sort((a, b) => {
              return a.id - b.id;
            })
            : startUsers.sort((a, b) => {
              return b.id - a.id;
            });
          break;
        case FilterType.FIRST_NAME:
          filteredUsers = filterDirection === FilterDirection.TO_TOP
            ? startUsers.sort((a, b) => sortToTop(a.firstName, b.firstName))
            : startUsers.sort((a, b) => sortToBot(a.firstName, b.firstName));
          break;
        case FilterType.LAST_NAME:
          filteredUsers = filterDirection === FilterDirection.TO_TOP
            ? startUsers.sort((a, b) => sortToTop(a.lastName, b.lastName))
            : startUsers.sort((a, b) => sortToBot(a.lastName, b.lastName));
          break;
        case FilterType.EMAIL:
          filteredUsers = filterDirection === FilterDirection.TO_TOP
            ? startUsers.sort((a, b) => sortToTop(a.email, b.email))
            : startUsers.sort((a, b) => sortToBot(a.email, b.email));
          break;
        case FilterType.PHONE:
          filteredUsers = filterDirection === FilterDirection.TO_TOP
            ? startUsers.sort((a, b) => sortToTop(a.phone, b.phone))
            : startUsers.sort((a, b) => sortToBot(a.phone, b.phone));
          break;
        case FilterType.NONE:
          const originalUsersList = state.originalUsers.slice();
          filteredUsers = originalUsersList;
          break;
      }
      return extend(
          state,
          {
            users: filteredUsers,
          }
      );

    case ActionType.SEARCH:
      let usersAfterSearch = state.originalUsers.slice();
      if (action.payload) {
        usersAfterSearch = usersAfterSearch.filter((user) => {
          const isSearchIncluded = filterComplexObject(user, action.payload);
          return isSearchIncluded;
        });

        return extend(
            state,
            {
              users: usersAfterSearch,
              currentPage: 1
            }
        );
      } else {
        return extend(
            state,
            {
              users: usersAfterSearch,
              currentPage: 1
            }
        );
      }
  }

  return state;
};

export default reducer;
