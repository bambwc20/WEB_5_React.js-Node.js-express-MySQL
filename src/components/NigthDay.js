import React from "react";
import "./NightDay.css";

const Body = {
  SetColor: function (Bodycolor, Fontcolor) {
    document.querySelector("body").style.backgroundColor = Bodycolor;
    document.querySelector("body").style.color = Fontcolor;
  },
};

const AllLinks = {
  SetColor: function (color) {
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = ++i;
    }
  },
};

const ControlLinks = {
  SetColor: function (color) {
    var alist = document.querySelectorAll(".control");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = ++i;
    }
  },
};

class NightDay extends React.Component {
  state = {
    value: "Night",
  };

  night_day_control = (e) => {
    if (e.target.value === "Night") {
      Body.SetColor("black", "white");
      AllLinks.SetColor("powderblue");
      ControlLinks.SetColor("black");
      this.setState({ value: "Day" });
    } else {
      Body.SetColor("white", "black");
      AllLinks.SetColor("blue");
      ControlLinks.SetColor("black");
      this.setState({ value: "Night" });
    }
  };

  componentWillUnmount() {
    Body.SetColor("white", "black");
    AllLinks.SetColor("blue");
  }

  render() {
    return (
      <div className="box">
        <div className="button ">
          <input
            style={{ fontSize: "25px" }}
            type="button"
            value={this.state.value}
            onClick={this.night_day_control}
          />
        </div>
      </div>
    );
  }
}

export default NightDay;
