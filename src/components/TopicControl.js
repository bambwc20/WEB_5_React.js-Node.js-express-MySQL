import React from "react";
import { Link } from "react-router-dom";
import "./TopicControl.css";

function TopicControl({ selector, name, id, onChange }) {
  if (selector === "About") {
    return (
      <div className="control_button">
        <button>
          <Link className={name} to={`/topics/create`}>
            create
          </Link>
        </button>
        <button>
          <Link className={name} to={`/topics/update?id=${id}`}>
            update
          </Link>
        </button>
        <form
          onSubmit={(e) => {
            onChange(id);
          }}
        >
          <input type="submit" value="delete" />
        </form>
      </div>
    );
  } else if (selector === "Home") {
    return (
      <div className="control_button">
        <button>
          <Link className={name} to={`/topics/create`}>
            create
          </Link>
        </button>
      </div>
    );
  } else if (selector === "Create") {
    return (
      <div className="control_button">
        <button>
          <Link className={name} to={`/topics/create`}>
            create
          </Link>
        </button>
      </div>
    );
  } else if (selector === "Update") {
    return (
      <div className="control_button">
        <button>
          <Link className={name} to={`/topics/create`}>
            create
          </Link>
        </button>
        <button>
          <Link className={name} to={`/topics/update?id=${id}`}>
            update
          </Link>
        </button>
      </div>
    );
  }
}

export default TopicControl;
