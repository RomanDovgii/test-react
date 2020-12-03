import React from "react";

const TableHeading = () => {
  return (
    <tr className="table__row">
      <th className="table__heading table__heading--bot-to-top">id</th>
      <th className="table__heading table__heading--bot-to-top">firstName</th>
      <th className="table__heading table__heading--bot-to-top">lastName</th>
      <th className="table__heading table__heading--bot-to-top">email</th>
      <th className="table__heading table__heading--bot-to-top">phone</th>
    </tr>
  );
};

export default TableHeading;
