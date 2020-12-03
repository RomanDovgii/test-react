import {ActionType} from "../action/action";
import {extend} from "../../utils/utils";
import {MAXIMUM_USERS_PER_PAGE} from "../../utils/const";

const initialState = {
  people: [],
  currentPagePeople: [],
  selectedUser: {},
  pages: 0,
  currentPage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      console.log(action.payload);
      const users = action.payload;
      const aPages = Math.ceil(users.length / MAXIMUM_USERS_PER_PAGE);
      const aCurrentPagePeople = users.slice(0, MAXIMUM_USERS_PER_PAGE);

      return extend(
          state,
          {
            people: users,
            currentPagePeople: aCurrentPagePeople,
            pages: aPages,
            currentPage: 1
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
      const people = state.people;

      const peopleUpdated = [
        action.payload,
        ...people
      ];

      const aPagesUpdated = Math.ceil(peopleUpdated.length / MAXIMUM_USERS_PER_PAGE);
      const aCurrentPagePeopleUpdated = peopleUpdated.slice(0, MAXIMUM_USERS_PER_PAGE);

      return extend(
          state,
          {
            people: peopleUpdated,
            currentPagePeople: aCurrentPagePeopleUpdated,
            pages: aPagesUpdated,
            currentPage: 1
          }
      );
  }

  return state;
};

export default reducer;
