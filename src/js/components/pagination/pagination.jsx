import React from "react";
import {connect} from "react-redux";
import {paginationType} from "../../types/types";

const Pagination = ({pages, currentPage}) => {

  return (
    <ul className="pagination">
      <li className="pagination__item"><a href="#" className="pagination__link">&lt;&lt;</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">&lt;</a></li>
      {[...Array(pages)].map((page, index) => {
        return (
          <li key={index} className="pagination__item"><a href="#" className={`pagination__link ${index + 1 === currentPage ? `pagination__link--active` : ``}`}>{index + 1}</a></li>
        );
      })}
      <li className="pagination__item"><a href="#" className="pagination__link">&gt;</a></li>
      <li className="pagination__item"><a href="#" className="pagination__link">&gt;&gt;</a></li>
    </ul>
  );
};

Pagination.propTypes = paginationType;

const mapStateToProps = (state) => ({
  pages: state.pages,
  currentPage: state.currentPage
});

export {Pagination};
export default connect(mapStateToProps)(Pagination);
