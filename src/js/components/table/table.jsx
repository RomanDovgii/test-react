import React, {PureComponent} from "react";
import {withRouter} from "react-router-dom";
import Pagination from "../pagination/pagination";
import TableHeading from "../table-heading/table-heading";
import TableElement from "../table-element/table-element";
import Loading from "../loading/loading";
import {connect} from "react-redux";
import {tableType} from "../../types/types";
import {fetchData} from "../../store/action/api-action";
import {flushData} from "../../store/action/action";

class Table extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadData, currentPageUsers} = this.props;

    if (currentPageUsers.length === 0) {
      loadData(this.props.location.state.dataSize);
    }
  }

  componentWillUnmount() {
    const {onUnmount} = this.props;

    onUnmount();
  }

  render() {
    const {isLoading, currentPageUsers} = this.props;

    if (!isLoading) {
      return (
        <section className="table">
          <table className="table__table">
            <thead>
              <TableHeading/>
            </thead>
            <tbody>
              {
                currentPageUsers.map((user) => {
                  return (
                    <TableElement
                      key = {`${user.id}+${user.lastName}+${user.firstNmae}`}
                      user = {user}
                    />
                  );
                })
              }
            </tbody>
          </table>
          <Pagination/>
        </section>
      );
    } else {
      return <Loading/>;
    }

  }
}

Table.propTypes = tableType;

const mapDispatchToPorps = (dispatch) => ({
  loadData(dataSize) {
    dispatch(fetchData(dataSize));
  },
  onUnmount() {
    dispatch(flushData());
  }
});

const mapStateToProps = (state) => ({
  currentPageUsers: state.currentPageUsers,
  isLoading: state.isLoading
});

export {Table};
export default withRouter(connect(mapStateToProps, mapDispatchToPorps)(Table));
