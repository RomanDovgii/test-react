import React from "react";
import SearchPanel from "../search-panel/search-panel";
import AddUser from "../add-user/add-user";
import withActiveAddUser from "../hoc/with-active-add-user/with-active-add-user";

const AddToTableWrapped = withActiveAddUser(AddUser);

const Controls = () => {
  return (
    <section className="controls">
      <SearchPanel/>
      <AddToTableWrapped/>
    </section>
  );
};

export default Controls;
