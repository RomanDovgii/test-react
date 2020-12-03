import React from "react";
import SearchPanel from "../search-panel/search-panel";
import AddToTable from "../add-to-table/add-to-table";

const Controls = () => {
  return (
    <section className="controls">
      <SearchPanel/>
      <AddToTable/>
    </section>
  );
};

export default Controls;
