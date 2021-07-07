import React, { Component } from "react";
import Movie from "./Movie";
class Movies extends Component {
  render() {
    return (
      <div className="movies-div">
        {this.props.movie.map((mov, index) => {
          if (mov.overview === "") {
            return <React.Fragment key={index}></React.Fragment>;
          } else {
            return <Movie index={index} mov={mov} />;
          }
        })}
      </div>
    );
  }
}

export default Movies;
