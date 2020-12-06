import React, {createRef, Fragment} from "react";
import AddUserHeading from "../add-user-heading/add-user-heading";
import {addUserType} from "../../types/types";
import {connect} from "react-redux";
import {UNKNOWN_INFORMATION, DESCRIPTION_FOR_NEW_USER} from "../../utils/const";
import {addUser, updateCurrentUsers, updatePagesCount} from "../../store/action/action";

const AddUser = ({isOpen, isLoading, onAddClick, onCloseClick, onAddToTableClick}) => {
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
        <table className="controls__add-user add-user">
          <thead>
            <AddUserHeading/>
          </thead>
          <tbody>
            <tr className="add-user__row">
              <td className="add-user__data">
                <input type="text" name="id" className="add-user__input" placeholder="Введите id" ref={idRef}/>
              </td>
              <td className="add-user__data">
                <input type="text" name="firstName" className="add-user__input" placeholder="Введите Имя" ref={firstNameRef}/>
              </td>
              <td className="add-user__data">
                <input type="text" name="lastName" className="add-user__input" placeholder="Введите Фамилию" ref={lastNameRef}/>
              </td>
              <td className="add-user__data">
                <input type="email" name="email" className="add-user__input" placeholder="Введите email" ref={emailRef}/>
              </td>
              <td className="add-user__data">
                <input type="text" name="phone" className="add-user__input" placeholder="Введите телефон" ref={phoneRef}/>
              </td>
            </tr>
          </tbody>
        </table>

        <button
          className="controls__add-button controls__add-button--to-table"
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            const idValue = parseInt(idRef.current.value, 0);
            const firstNameValue = firstNameRef.current.value;
            const lastNameValue = lastNameRef.current.value;
            const emailValue = emailRef.current.value;
            const phoneValue = phoneRef.current.value;


            if (!isLoading && idValue && firstNameValue && lastNameValue && emailValue && phoneValue) {
              const user = {
                id: idValue,
                firstName: firstNameValue,
                lastName: lastNameValue,
                email: emailValue,
                phone: phoneValue,
                address: {
                  streetAddress: UNKNOWN_INFORMATION,
                  city: UNKNOWN_INFORMATION,
                  state: UNKNOWN_INFORMATION,
                  zip: UNKNOWN_INFORMATION
                },
                description: DESCRIPTION_FOR_NEW_USER
              };

              onCloseClick();
              onAddToTableClick(user);
            }
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

AddUser.propTypes = addUserType;

const mapStateToProps = (state) => ({
  isLoading: state.isLoading
});

const mapDispatchToPorps = (dispatch) => ({
  onAddToTableClick(user) {
    dispatch(addUser(user));
    dispatch(updateCurrentUsers());
    dispatch(updatePagesCount());
  }
});

export {AddUser};
export default connect(mapStateToProps, mapDispatchToPorps)(AddUser);
