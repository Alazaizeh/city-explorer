import React, { Component } from "react";
import WeatherDay from "./WeatherDay";
class Weather extends Component {
  render() {
    return (
      <div style={{ color: "black" }} className="weather-div">
        <h1>Weather</h1>
        <br />
        {this.props.city.map((day, index) => (
          <WeatherDay key={index} city={day} />
        ))}
      </div>
    );
  }
}

export default Weather;
