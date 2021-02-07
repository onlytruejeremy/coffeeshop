import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className={`modal__container active`}>
      <div className="modal__inner">
        <table>
          <thead>{props.content[0].category.toUpperCase()}</thead>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            {props.content[0].items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name.toUpperCase()}</td>
                  <td>${item.price}</td>
                  <td className="td__flex">
                    <span>&#8593;</span>
                    <input type="text" />
                    <span> &#8595;</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="btn btn__primary"
          onClick={(e) => {
            e.preventDefault();
            props.set();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
