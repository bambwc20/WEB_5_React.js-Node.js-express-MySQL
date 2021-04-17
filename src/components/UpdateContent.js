import React from "react";
import "./UpdateContent.css";

class UpdateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputvalue: props.title };
  }

  onChange = (e) => {
    this.setState({ inputvalue: e.target.value });
  };

  render() {
    return (
      <div className="comment_box_line">
        <form
          onSubmit={(e) => {
            this.props.onChange(
              this.props.id,
              e.target[0].value,
              e.target[1].value
            );
          }}
        >
          <input
            type="text"
            placeholder="title....."
            className="comment_input_box"
            value={this.state.inputvalue}
            onChange={this.onChange}
          />
          <p>
            <textarea
              placeholder="description....."
              className="comment_textarea"
              cols="30"
              rows="10"
              defaultValue={this.props.description}
            ></textarea>
          </p>
          <input type="submit" value="update" />
        </form>
      </div>
    );
  }
}

export default UpdateContent;
