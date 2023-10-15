import React from "react";
import ReactDOM from "react-dom";

const Overlay = (props) => {
  return (
    <div
      id="overlay"
      className={props.display ? "overlay" : ""}
      onClick={props.toggle}
    ></div>
  );
};

export default Overlay;
