import React from "react";

const UserInfo = () => {
  return (
    <section className="user-info">
      <ul className="user-nfo__list">
        <li className="user-info__item">
          <p className="user-info__description">Выбран пользователь:</p>
          <p className="user-info__information">
            <b>Nikolai Nikolaev</b>
          </p>
        </li>
        <li className="user-info__item user-info__item--description">
          <p className="user-info__description">Описание:</p>
          <textarea defaultValue="et lacus magna dolor..."/>
        </li>
        <li className="user-info__item">
          <p className="user-info__description">Адрес проживания:</p>
          <p className="user-info__information">
            <b>9792 Mattis Ct</b>
          </p>
        </li>
        <li className="user-info__item">
          <p className="user-info__description">Город:</p>
          <p className="user-info__information">
            <b>Waukesha</b>
          </p>
        </li>
        <li className="user-info__item">
          <p className="user-info__description">Провинция/Штат:</p>
          <p className="user-info__information">
            <b>WI</b>
          </p>
        </li>
        <li className="user-info__item">
          <p className="user-info__description">Индекс:</p>
          <p className="user-info__information">
            <b>22178</b>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default UserInfo;
