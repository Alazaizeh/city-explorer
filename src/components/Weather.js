import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="weather-div">
        <div>
          {this.props.city.map((ele, index) => {
            return (
              <div key={index}>
                Day : {ele.date}
                {<br />}
                Weather : {ele.description}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Weather;
