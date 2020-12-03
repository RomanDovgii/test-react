import React from "react";
import Pagination from "../pagination/pagination";

const Table = () => {
  return (
    <section className="table">
      <Pagination/>
      <table className="table__table">
        <tbody>
          <tr className="table__row">
            <th className="table__heading table__heading--bot-to-top">id</th>
            <th className="table__heading table__heading--bot-to-top">firstName</th>
            <th className="table__heading table__heading--bot-to-top">lastName</th>
            <th className="table__heading table__heading--bot-to-top">email</th>
            <th className="table__heading table__heading--bot-to-top">phone</th>
          </tr>
          <tr className="table__row">
            <td className="table__data">101</td>
            <td className="table__data">Nikolai</td>
            <td className="table__data">Nikolaev</td>
            <td className="table__data">nikolaev@gmail.com</td>
            <td className="table__data">8 (999) 999-99-99</td>
          </tr>
          <tr className="table__row">
            <td className="table__data">101</td>
            <td className="table__data">Nikolai</td>
            <td className="table__data">Nikolaev</td>
            <td className="table__data">nikolaev@gmail.com</td>
            <td className="table__data">8 (999) 999-99-99</td>
          </tr>
          <tr className="table__row">
            <td className="table__data">101</td>
            <td className="table__data">Nikolai</td>
            <td className="table__data">Nikolaev</td>
            <td className="table__data">nikolaev@gmail.com</td>
            <td className="table__data">8 (999) 999-99-99</td>
          </tr>
          <tr className="table__row">
            <td className="table__data">101</td>
            <td className="table__data">Nikolai</td>
            <td className="table__data">Nikolaev</td>
            <td className="table__data">nikolaev@gmail.com</td>
            <td className="table__data">8 (999) 999-99-99</td>
          </tr>
          <tr className="table__row">
            <td className="table__data">101</td>
            <td className="table__data">Nikolai</td>
            <td className="table__data">Nikolaev</td>
            <td className="table__data">nikolaev@gmail.com</td>
            <td className="table__data">8 (999) 999-99-99</td>
          </tr>
          <tr className="table__row">
            <td className="table__data">101</td>
            <td className="table__data">Nikolai</td>
            <td className="table__data">Nikolaev</td>
            <td className="table__data">nikolaev@gmail.com</td>
            <td className="table__data">8 (999) 999-99-99</td>
          </tr>
          <tr className="table__row">
            <td className="table__data">101</td>
            <td className="table__data">Nikolai</td>
            <td className="table__data">Nikolaev</td>
            <td className="table__data">nikolaev@gmail.com</td>
            <td className="table__data">8 (999) 999-99-99</td>
          </tr>
          <tr className="table__row">
            <td className="table__data">101</td>
            <td className="table__data">Nikolai</td>
            <td className="table__data">Nikolaev</td>
            <td className="table__data">nikolaev@gmail.com</td>
            <td className="table__data">8 (999) 999-99-99</td>
          </tr>
          <tr className="table__row">
            <td className="table__data">101</td>
            <td className="table__data">Nikolai</td>
            <td className="table__data">Nikolaev</td>
            <td className="table__data">nikolaev@gmail.com</td>
            <td className="table__data">8 (999) 999-99-99</td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </section>
  );
};

export default Table;
