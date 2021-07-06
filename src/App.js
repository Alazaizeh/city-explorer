import "./App.css";
import React, { Component } from "react";
import CityForm from "./components/CityForm";
import axios from "axios";
import Header from "./components/Header";
import Weather from "./components/Weather";
import ErrorAlert from "./components/ErrorAlert";
import Movies from "./components/Movies";
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
      weatherResult: null,
      moviesResult: null,
      showError: false,
    };
  }

  hideAlert = () => {
    this.setState({
      showError: false,
    });
  };

  submitForm = async (e) => {
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${e.target.cityName.value}&format=json`;
    // let resultData = await axios.get(url);

    axios
      .get(url)
      .then((resultData) => {
        this.setState({
          showResult: true,
          result: resultData.data[0].display_name,
          lon: resultData.data[0].lon,
          lat: resultData.data[0].lat,
        });

        this.setState({
          showMap: true,
          mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${resultData.data[0].lat},${resultData.data[0].lon}&zoom=16&size=1200x700`,
        });
        axios
          .get(
            `https://city-expl0rer.herokuapp.com/weather?city=${e.target.cityName.value}&lat=${resultData.data[0].lat}&lon=${resultData.data[0].lon}`
          )
          .then((resultData) => {
            this.setState({
              weatherResult: <Weather city={resultData.data} />,
            });
          })
          .catch((error) => {
            this.setState({
              weatherResult: <></>,
            });
          });
        axios
          .get(
            `https://city-expl0rer.herokuapp.com/movies?city=${e.target.cityName.value}`
          )
          .then((resultData) => {
            this.setState({
              moviesResult: <Movies movie={resultData.data} />,
            });
          })
          .catch((error) => {
            this.setState({
              moviesResult: <></>,
            });
          });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ showError: true });
      });
  };
  render() {
    return (
      <div className="app-div">
        <Header />
        <ErrorAlert show={this.state.showError} hideAlert={this.hideAlert} />
        <CityForm submitForm={this.submitForm} />
        <div>
          {this.state.showResult && (
            <div className="result-div">
              <h1>{this.state.result}</h1>
              <h2>Latitude : {this.state.lat}</h2>
              <h2>Longitude : {this.state.lon}</h2>
            </div>
          )}
          {this.state.weatherResult}
          <div className="result-div">
            {this.state.showMap && <img alt="map" src={this.state.mapSrc} />}
          </div>
          {this.state.moviesResult}
        </div>
      </div>
    );
  }
}

export default App;
