import React from "react";
import {tableElementType} from "../../types/types";

const TableElement = ({person}) => {
  const {id, firstName, lastName, email, phone} = person;

  return (
    <tr className="table__row">
      <td className="table__data">{id}</td>
      <td className="table__data">{firstName}</td>
      <td className="table__data">{lastName}</td>
      <td className="table__data">{email}</td>
      <td className="table__data">{phone}</td>
    </tr>
  );
};

TableElement.propTypes = tableElementType;

export default TableElement;
