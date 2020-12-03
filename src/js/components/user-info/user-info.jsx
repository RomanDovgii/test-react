import React from "react";
import {connect} from "react-redux";

const UserInfo = ({selectedUser}) => {
  if (Object.keys(selectedUser).length === 0) {
    return null;
  } else {
    const {address, description} = selectedUser;

    return (
      <section className="user-info">
        <ul className="user-nfo__list">
          <li className="user-info__item">
            <p className="user-info__description">Выбран пользователь:</p>
            <p className="user-info__information">
              <b>{selectedUser.firstName} {selectedUser.lastName}</b>
            </p>
          </li>
          <li className="user-info__item user-info__item--description">
            <p className="user-info__description">Описание:</p>
            <textarea value={description} readOnly/>
          </li>
          <li className="user-info__item">
            <p className="user-info__description">Адрес проживания:</p>
            <p className="user-info__information">
              <b>{address.streetAddress}</b>
            </p>
          </li>
          <li className="user-info__item">
            <p className="user-info__description">Город:</p>
            <p className="user-info__information">
              <b>{address.city}</b>
            </p>
          </li>
          <li className="user-info__item">
            <p className="user-info__description">Провинция/Штат:</p>
            <p className="user-info__information">
              <b>{address.state}</b>
            </p>
          </li>
          <li className="user-info__item">
            <p className="user-info__description">Индекс:</p>
            <p className="user-info__information">
              <b>{address.zip}</b>
            </p>
          </li>
        </ul>
      </section>
    );
  }
};

const mapStateToProps = (state) => ({
  selectedUser: state.selectedUser
});

export {UserInfo};
export default connect(mapStateToProps)(UserInfo);
