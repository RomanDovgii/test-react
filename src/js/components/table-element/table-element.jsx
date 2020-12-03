import React from "react";
import {connect} from "react-redux";
import {selectUser} from "../../store/action/action";
import {tableElementType} from "../../types/types";

const TableElement = ({user, onRowClick}) => {
  const {id, firstName, lastName, email, phone} = user;

  return (
    <tr
      className="table__row"
      onClick={() => {
        onRowClick(user);
      }}
    >
      <td className="table__data">{id}</td>
      <td className="table__data">{firstName}</td>
      <td className="table__data">{lastName}</td>
      <td className="table__data">{email}</td>
      <td className="table__data">{phone}</td>
    </tr>
  );
};

TableElement.propTypes = tableElementType;

const mapDispatchToPorps = (dispatch) => ({
  onRowClick(user) {
    dispatch(selectUser(user));
  }
});

export {TableElement};
export default connect(null, mapDispatchToPorps)(TableElement);
