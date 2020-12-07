import React, {createRef} from "react";
import {connect} from "react-redux";
import {sortUsers, updateCurrentUsers} from "../../store/action/action";
import {FilterDirection, FilterType} from "../../utils/const";
import {tableHeadingType} from "../../types/types";

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
            const refs = [idRef.current, firstNameRef.current, lastNameRef.current, emailRef.current, phoneRef.current];
            onFilterClick(idRef.current, refs);
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
            const refs = [idRef.current, firstNameRef.current, lastNameRef.current, emailRef.current, phoneRef.current];
            onFilterClick(firstNameRef.current, refs);
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
            const refs = [idRef.current, firstNameRef.current, lastNameRef.current, emailRef.current, phoneRef.current];
            onFilterClick(lastNameRef.current, refs);
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
            const refs = [idRef.current, firstNameRef.current, lastNameRef.current, emailRef.current, phoneRef.current];
            onFilterClick(emailRef.current, refs);
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
            const refs = [idRef.current, firstNameRef.current, lastNameRef.current, emailRef.current, phoneRef.current];
            onFilterClick(phoneRef.current, refs);
          }}
        >
          phone
        </button>
      </th>
    </tr>
  );
};

TableHeading.propTypes = tableHeadingType;

const mapDispatchToPorps = (dispatch) => ({
  onFilterClick(ref, refs) {
    let filterName = ref.textContent;
    let filterDirection;

    refs.forEach((elementRef) => {
      if (elementRef !== ref) {
        elementRef.classList.remove(`table__button--bot-to-top`);
        elementRef.classList.remove(`table__button--top-to-bot`);
      }
    });

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
    dispatch(sortUsers(filterInfo));
    dispatch(updateCurrentUsers());
  }
});

export {TableHeading};
export default connect(null, mapDispatchToPorps)(TableHeading);
