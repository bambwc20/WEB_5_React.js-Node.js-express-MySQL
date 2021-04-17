import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ id, title }) {
  return (
    <li>
      <Link to={`/topics?id=${id}`}>{title}</Link>
    </li>
  );
}

export default Navigation;
