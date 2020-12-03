import React from "react";

const SearchPanel = () => {
  return (
    <form className="controls__filtration">
      <input className="controls__search" type="text" name="filtration input" placeholder="Введите данные поиска"/>
      <button className="controls__find" type="submit">Найти</button>
    </form>
  );
};

export default SearchPanel;
