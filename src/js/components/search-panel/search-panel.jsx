import React, {createRef} from "react";
import {connect} from "react-redux";
import {searchUsers, updateCurrentUsers, updatePagesCount} from "../../store/action/action";

const SearchPanel = ({onSearchClick}) => {
  const searchRef = createRef();

  return (
    <form className="controls__filtration">
      <input className="controls__search" type="text" name="filtration input" placeholder="Введите данные поиска" ref={searchRef}/>
      <button className="controls__find" type="submit" onClick={(evt) => {
        evt.preventDefault();
        const searchString = searchRef.current.value;
        onSearchClick(searchString);
      }}>Найти</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSearchClick(searchString) {
    dispatch(searchUsers(searchString));
    dispatch(updateCurrentUsers());
    dispatch(updatePagesCount());
  }
});

export {SearchPanel};
export default connect(null, mapDispatchToProps)(SearchPanel);
