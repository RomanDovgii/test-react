import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../utils/const";

const SelectionPage = () => {
  return (
    <section className="selection">
      <div className="selection__wrapper">
        <p className="selection__text">Выберите объем данных</p>
        <Link className="selection__link" to={{
          pathname: AppRoute.TABLE,
          state: {
            dataSize: `LARGE`
          }
        }}> Большой объем данных </Link>
        <Link className="selection__link" to={{
          pathname: AppRoute.TABLE,
          state: {
            dataSize: `SMALL`
          }
        }}> Маленький объем данных</Link>
      </div>
    </section>
  );
};

export default SelectionPage;
