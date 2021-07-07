import React, { Component } from "react";

export class WeatherDay extends Component {
  render() {
    return (
      <div>
        <div>
          Date :{" "}
          <span style={{ color: "#e3c565" }}>{this.props.city.date}</span>
        </div>
        <div>
          -&gt;{"  "}
          <span style={{ color: "#89CFF0" }}>
            {this.props.city.description}
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherDay;
