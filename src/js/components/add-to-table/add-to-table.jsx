import React, {createRef, Fragment} from "react";
import TableHeading from "../table-heading/table-heading";
import {addToTableType} from "../../types/types";
import {connect} from "react-redux";
import {ADDRESS_FOR_NEW_USER, DESCRIPTION_FOR_NEW_USER} from "../../utils/const";
import {addUser} from "../../store/action/action";

const AddToTable = ({isOpen, onAddClick, onCloseClick, onAddToTableClick}) => {
  const idRef = createRef();
  const firstNameRef = createRef();
  const lastNameRef = createRef();
  const emailRef = createRef();
  const phoneRef = createRef();

  return (
    <Fragment>
      {!isOpen &&
        <button className="controls__add-button" onClick={onAddClick}>Добавить</button>
      }
      {isOpen &&
        <button className="controls__add-button" onClick={onCloseClick}>Закрыть</button>
      }
      {isOpen &&
      <form className="controls__add-user">
        <table className="controls__table table__table">
          <thead>
            <TableHeading/>
          </thead>
          <tbody>
            <tr className="table__row">
              <td className="table__data">
                <input type="text" name="id" className="table__data-input" placeholder="Введите id" ref={idRef}/>
              </td>
              <td className="table__data">
                <input type="text" name="firstName" className="table__data-input" placeholder="Введите Имя" ref={firstNameRef}/>
              </td>
              <td className="table__data">
                <input type="text" name="lastName" className="table__data-input" placeholder="Введите Фамилию" ref={lastNameRef}/>
              </td>
              <td className="table__data">
                <input type="email" name="email" className="table__data-input" placeholder="Введите email" ref={emailRef}/>
              </td>
              <td className="table__data">
                <input type="text" name="phone" className="table__data-input" placeholder="Введите телефон" ref={phoneRef}/>
              </td>
            </tr>
          </tbody>
        </table>

        <button
          className="controls__add-button controls__add-button--to-table"
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();

            const user = {
              id: parseInt(idRef.current.value, 0),
              firstName: firstNameRef.current.value,
              lastName: lastNameRef.current.value,
              email: emailRef.current.value,
              phone: phoneRef.current.value,
              address: ADDRESS_FOR_NEW_USER,
              description: DESCRIPTION_FOR_NEW_USER
            };

            onCloseClick();
            onAddToTableClick(user);
          }
          }
        >
          Добавить в таблицу
        </button>
      </form>
      }
    </Fragment>
  );
};

AddToTable.propTypes = addToTableType;

const mapDispatchToPorps = (dispatch) => ({
  onAddToTableClick(user) {
    dispatch(addUser(user));
  }
});

export {AddToTable};
export default connect(null, mapDispatchToPorps)(AddToTable);
