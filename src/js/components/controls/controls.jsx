import React from "react";
import SearchPanel from "../search-panel/search-panel";
import AddToTable from "../add-to-table/add-to-table";
import withActiveAddUser from "../hoc/with-active-add-user/with-active-add-user";

const AddToTableWrapped = withActiveAddUser(AddToTable);

const Controls = () => {
  return (
    <section className="controls">
      <SearchPanel/>
      <AddToTableWrapped/>
    </section>
  );
};

export default Controls;
