import React, {createRef} from "react";
import {connect} from "react-redux";
import {filterUsers, updateCurrentUsers} from "../../store/action/action";
import {FilterDirection, FilterType} from "../../utils/const";

const TableHeading = ({onFilterClick}) => {
  const idRef = createRef();
  const firstNameRef = createRef();
  const lastNameRef = createRef();
  const emailRef = createRef();
  const phoneRef = createRef();

  return (
    <tr className="table__row">
      <th className="table__heading ">
        <button
          className="table__button"
          ref={idRef}
          onClick={() => {
            onFilterClick(idRef.current);
          }}
        >
          id
        </button>
      </th>
      <th className="table__heading">
        <button
          className="table__button"
          ref={firstNameRef}
          onClick={() => {
            onFilterClick(firstNameRef.current);
          }}
        >
          firstName
        </button>
      </th>
      <th className="table__heading">
        <button
          className="table__button"
          ref={lastNameRef}
          onClick={() => {
            onFilterClick(lastNameRef.current);
          }}
        >
          lastName
        </button>
      </th>
      <th className="table__heading">
        <button
          className="table__button"
          ref={emailRef}
          onClick={() => {
            onFilterClick(emailRef.current);
          }}
        >
          email
        </button>
      </th>
      <th className="table__heading">
        <button
          className="table__button"
          ref={phoneRef}
          onClick={() => {
            onFilterClick(phoneRef.current);
          }}
        >
          phone
        </button>
      </th>
    </tr>
  );
};

const mapDispatchToPorps = (dispatch) => ({
  onFilterClick(ref) {
    let filterName = ref.textContent;
    let filterDirection;

    switch (true) {
      case ref.classList.contains(`table__button--top-to-bot`):
        filterDirection = FilterDirection.TO_TOP;
        ref.classList.remove(`table__button--top-to-bot`);
        ref.classList.add(`table__button--bot-to-top`);
        break;
      case ref.classList.contains(`table__button--bot-to-top`):
        filterName = FilterType.NONE;
        ref.classList.remove(`table__button--bot-to-top`);
        break;
      default:
        filterDirection = FilterDirection.TO_BOT;
        ref.classList.add(`table__button--top-to-bot`);
        break;
    }

    const filterInfo = {
      filter: filterName,
      direction: filterDirection,
    };
    dispatch(filterUsers(filterInfo));
    dispatch(updateCurrentUsers());
  }
});

export {TableHeading};
export default connect(null, mapDispatchToPorps)(TableHeading);
