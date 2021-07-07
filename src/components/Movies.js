import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Movies extends Component {
  changeIMG = () => {
    return "https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";
  };
  render() {
    return (
      <div className="movies-div">
        {this.props.movie.map((mov, index) => {
          if (mov.overview === "") {
            return <React.Fragment key={index}></React.Fragment>;
          } else {
            return (
              <Card
                key={index}
                style={{
                  width: "18rem",
                  display: "inline-block",
                  height: "600px",
                }}
              >
                <Card.Img
                  style={{ width: "18rem", height: "18rem" }}
                  variant="top"
                  src={
                    mov.image_url.length <= 36
                      ? this.changeIMG()
                      : mov.image_url
                  }
                  title={mov.title}
                  alt={mov.title}
                />
                <Card.Body>
                  <Card.Title>{mov.title}</Card.Title>
                  <Card.Text style={{ height: "200px", overflow: "auto" }}>
                    {mov.overview}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          }
        })}
      </div>
    );
  }
}

export default Movies;
