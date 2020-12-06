import React from "react";

const AddUserHeading = () => {

  return (
    <tr className="add-user__row">
      <th className="add-user__heading">
          id
      </th>
      <th className="add-user__heading">
          firstName
      </th>
      <th className="add-user__heading">
          lastName
      </th>
      <th className="add-user__heading">
          email
      </th>
      <th className="add-user__heading">
          phone
      </th>
    </tr>
  );
};

export default AddUserHeading;
