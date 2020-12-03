import React, {Fragment} from "react";
import Controls from "../controls/controls";
import UserInfo from "../user-info/user-info";
import Table from "../table/table";
import {connect} from "react-redux";
import {fetchUsers} from "../../store/action/action";

import {tablePageType} from "../../types/types";

const TablePage = (props) => {
  const {getUsers} = props;

  getUsers();

  return (
    <Fragment>
      <Controls/>
      <Table/>
      <UserInfo/>
    </Fragment>
  );
};

TablePage.propTypes = tablePageType;

const mapDispatchToPorps = (dispatch) => ({
  getUsers() {
    dispatch(fetchUsers());
  }
});

export {TablePage};

export default connect(null, mapDispatchToPorps)(TablePage);
