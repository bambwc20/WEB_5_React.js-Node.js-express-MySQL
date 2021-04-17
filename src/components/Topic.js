import React from "react";
import "./Topic.css";

function Topic({ title, description }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Topic;
