import React, { useContext } from "react";
import "./trash.styles.css";

const Trash = ({ onClick }) => (
  <div className="list-icons icon icon-cross" onClick={onClick}></div>
);

export default Trash;
