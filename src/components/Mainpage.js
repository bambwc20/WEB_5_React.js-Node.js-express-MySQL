import React from "react";
import Topic from "./Topic";
import TopicControl from "./TopicControl";
import { Link } from "react-router-dom";
import NightDay from "./NigthDay";
import Navigation from "./Navigation";

function Mainpage({
  list,
  Topic_title,
  Topic_description,
  selector,
  id,
  DATAfunction,
}) {
  return (
    <>
      <h1>
        <Link to="/">WEB</Link>
      </h1>
      <div className="grid">
        <ol>
          {list.map((topic) => {
            return (
              <Navigation key={topic.id} id={topic.id} title={topic.title} />
            );
          })}
        </ol>
        <Topic title={Topic_title} description={Topic_description} />
      </div>
      <TopicControl
        name={"control"}
        selector={selector}
        id={id}
        onChange={DATAfunction}
      />
      <NightDay />
    </>
  );
}

export default Mainpage;
