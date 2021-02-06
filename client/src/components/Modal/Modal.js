import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className={`modal__container active`}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, odit?
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.set();
        }}
      >
        Close Modal
      </button>
    </div>
  );
};

export default Modal;
