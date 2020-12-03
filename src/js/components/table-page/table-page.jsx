import React, {Fragment} from "react";
import Controls from "../controls/controls";
import UserInfo from "../user-info/user-info";
import Table from "../table/table";

const TablePage = () => {
  return (
    <Fragment>
      <Controls/>
      <Table/>
      <UserInfo/>
    </Fragment>
  );
};



export default TablePage;
