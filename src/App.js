import "./App.css";
import React, { Component } from "react";
import CityForm from "./components/CityForm";
import axios from "axios";
import Header from "./components/Header";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      mapSrc: null,
      showResult: false,
      showMap: false,
      lon: 0,
      lat: 0,
    };
  }

  submitForm = async (e) => {
    // let cityName = e.target.cityName.value;
    // let showMap = e.target.showMap.checked;
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${e.target.cityName.value}&format=json`;
    let resultData = await axios.get(url);
    console.log(resultData.data[0]);
    this.setState({
      showResult: true,
      result: resultData.data[0].display_name,
      lon: resultData.data[0].lon,
      lat: resultData.data[0].lat,
    });

    if (e.target.showMap.checked) {
      this.setState({
        showMap: true,
        mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${resultData.data[0].lat},${resultData.data[0].lon}&zoom=16&size=1000x500`,
        // &format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`,
      });
    }
  };
  render() {
    return (
      <div className="app-div">
        <Header />
        <CityForm submitForm={this.submitForm} />
        <div>
          {this.state.showResult && (
            <div className="result-div">
              <h1>{this.state.result}</h1>
              <h2>Latitude : {this.state.lat}</h2>
              <h2>Longitude : {this.state.lon}</h2>
              {this.state.showMap && <img alt="map" src={this.state.mapSrc} />}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
