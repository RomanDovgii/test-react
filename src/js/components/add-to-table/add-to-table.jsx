import React, {Fragment} from "react";
import TableHeading from "../table-heading/table-heading";

const AddToTable = () => {
  return (
    <Fragment>
      <button className="controls__add-button">Добавить </button>
      <form className="controls__add-user">
        <table className="controls__table table__table">
          <thead>
            <TableHeading/>
          </thead>
          <tbody>
            <tr className="table__row">
              <td className="table__data">
                <input type="text" name="id" className="table__data-input" placeholder="Введите id"/>
              </td>
              <td className="table__data">
                <input type="text" name="firstName" className="table__data-input" placeholder="Введите Имя"/>
              </td>
              <td className="table__data">
                <input type="text" name="lastName" className="table__data-input" placeholder="Введите Фамилию"/>
              </td>
              <td className="table__data">
                <input type="email" name="email" className="table__data-input" placeholder="Введите email"/>
              </td>
              <td className="table__data">
                <input type="text" name="phone" className="table__data-input" placeholder="Введите телефон"/>
              </td>
            </tr>
          </tbody>
        </table>

        <button className="controls__add-button controls__add-button--to-table" type="submit">Добавить в таблицу</button>
      </form>
    </Fragment>
  );
};

export default AddToTable;
