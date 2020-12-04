import React, {Fragment} from "react";
import {connect} from "react-redux";
import {paginationType} from "../../types/types";
import {changePage, toFirstPage, toLastPage, toNextPage, toPrevPage, updateCurrentUsers} from "../../store/action/action";

const Pagination = ({pages, currentPage, onPageClick, onFirstClick, onPreviousClick, onNextClick, onLastClick}) => {

  return (
    <ul className="pagination">
      {currentPage > 1 &&
      <Fragment>
        <li className="pagination__item">
          <a
            href="#"
            className="pagination__link"
            onClick={(evt) => {
              evt.preventDefault();
              onFirstClick();
            }}>&lt;&lt;</a>
        </li>
        <li className="pagination__item">
          <a
            href="#"
            className="pagination__link"
            onClick={(evt) => {
              evt.preventDefault();
              onPreviousClick();
            }}>&lt;</a>
        </li>
      </Fragment>
      }
      {[...Array(pages)].map((page, index) => {
        return (
          <li key={index} className="pagination__item">
            <a
              href="#"
              className={`pagination__link ${index + 1 === currentPage ? `pagination__link--active` : ``}`}
              onClick={(evt) => {
                evt.preventDefault();
                const newPage = index + 1;

                onPageClick(newPage);
              }}
            >
              {index + 1}
            </a>
          </li>
        );
      })}
      {currentPage < pages &&
        <Fragment>
          <li className="pagination__item">
            <a
              href="#"
              className="pagination__link"
              onClick={(evt) => {
                evt.preventDefault();
                onNextClick();
              }}>&gt;</a>
          </li>
          <li className="pagination__item">
            <a
              href="#"
              className="pagination__link"
              onClick={(evt) => {
                evt.preventDefault();
                onLastClick();
              }}>&gt;&gt;</a>
          </li>
        </Fragment>
      }
    </ul>
  );
};

Pagination.propTypes = paginationType;

const mapDispatchToPorps = (dispatch) => ({
  onPageClick(newPage) {
    dispatch(changePage(newPage));
    dispatch(updateCurrentUsers());
  },
  onFirstClick() {
    dispatch(toFirstPage());
    dispatch(updateCurrentUsers());
  },
  onLastClick() {
    dispatch(toLastPage());
    dispatch(updateCurrentUsers());
  },
  onNextClick() {
    dispatch(toNextPage());
    dispatch(updateCurrentUsers());
  },
  onPreviousClick() {
    dispatch(toPrevPage());
    dispatch(updateCurrentUsers());
  }
});

const mapStateToProps = (state) => ({
  pages: state.pages,
  currentPage: state.currentPage
});

export {Pagination};
export default connect(mapStateToProps, mapDispatchToPorps)(Pagination);
