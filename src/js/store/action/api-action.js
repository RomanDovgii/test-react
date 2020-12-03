import {SMALL_DATA, LARGE_DATA, Data} from "../../utils/const";
import {fetchUsers} from "./action";

export const fetchData = (dataSet) => (dispatch, _getState) => {
  let url;

  switch (dataSet) {
    case Data.LARGE:
      url = LARGE_DATA;
      break;
    case Data.SMALL:
      url = SMALL_DATA;
      break;
    default:
      url = SMALL_DATA;
      break;
  }

  return fetch(url)
  .then((response) => response.json())
  .then((result) => {
    dispatch(fetchUsers(result));
  })
  .catch((err) => {
    console.log(`something went wron`);
  });
};
