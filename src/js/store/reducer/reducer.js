import {ActionType} from "../action/action";
import {extend} from "../../utils/utils";
import {MAXIMUM_USERS_PER_PAGE} from "../../utils/const";
import {mocks} from "../../mocks/mocks";

const initialState = {
  people: [],
  currentPagePeople: [],
  personSelected: {},
  pages: 0,
  currentPage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      const aPages = Math.ceil(mocks.length / MAXIMUM_USERS_PER_PAGE);
      const aCurrentPage = mocks.slice(0, MAXIMUM_USERS_PER_PAGE);

      return extend(
          state,
          {
            people: mocks,
            currentPagePeople: aCurrentPage,
            pages: aPages,
            currentPage: 1
          }
      );
  }

  return state;
};

export default reducer;
