import React from "react";
import "./CreateContent.css";

class CreateContent extends React.Component {
  render() {
    return (
      <div className="comment_box_line">
        <form
          onSubmit={(e) => {
            this.props.onChange(e.target[0].value, e.target[1].value);
          }}
        >
          <input
            type="text"
            placeholder="title....."
            className="comment_input_box"
          />
          <p>
            <textarea
              placeholder="description....."
              className="comment_textarea"
              cols="30"
              rows="10"
            ></textarea>
          </p>
          <input type="submit" value="create" />
        </form>
      </div>
    );
  }
}

export default CreateContent;
