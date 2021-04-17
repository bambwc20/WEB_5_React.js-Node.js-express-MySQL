import React from "react";
import Topic from "./Topic";
import { Link } from "react-router-dom";

function Loadingpage() {
  return (
    <>
      <h1>
        <Link to="/">WEB</Link>
      </h1>
      <div className="grid">
        <ol>Loading</ol>
        <Topic title={"Loading"} description="Loading" />
      </div>
    </>
  );
}

export default Loadingpage;
