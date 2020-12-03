import React from "react";
import Pagination from "../pagination/pagination";
import TableHeading from "../table-heading/table-heading";
import TableElement from "../table-element/table-element";
import {connect} from "react-redux";
import {tableType} from "../../types/types";

const Table = (props) => {
  const {currentPagePeople} = props;

  return (
    <section className="table">
      {/* <Pagination/> */}
      <table className="table__table">
        <thead>
          <TableHeading/>
        </thead>
        <tbody>
          {
            currentPagePeople.map((person) => {
              return (
                <TableElement
                  key = {`${person.id}+${person.lastName}+${person.firstNmae}`}
                  person = {person}
                />
              );
            })
          }
        </tbody>
      </table>
      <Pagination/>
    </section>
  );
};

Table.propTypes = tableType;

const mapStateToProps = (state) => ({
  currentPagePeople: state.currentPagePeople
});

export {Table};
export default connect(mapStateToProps)(Table);
