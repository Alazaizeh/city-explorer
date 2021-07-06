import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="weather-div">
        <div>
          <div>Weather : {this.props.city.description}</div>
          <div>Day : {this.props.city.date}</div>
        </div>
      </div>
    );
  }
}

export default Weather;
