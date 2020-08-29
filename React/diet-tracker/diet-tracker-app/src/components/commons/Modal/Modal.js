import React from "react";

import "./Modal.css";

const Modal = (props) => {
  const { show, handleClose, children } = props;
  console.log(props, props.children);
  return (
    <div className={`modal ${show ? "display-block" : "display-none"}`}>
      <section className="modal-content">
        <button className="close-btn" onClick={handleClose}>
          <i className="fa fa-times" />
        </button>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default Modal;
