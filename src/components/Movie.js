import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Movie extends Component {
  changeIMG = () => {
    return "https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";
  };
  render() {
    return (
      <Card
        key={this.props.index}
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
            this.props.mov.image_url.length <= 36
              ? this.changeIMG()
              : this.props.mov.image_url
          }
          title={this.props.mov.title}
          alt={this.props.mov.title}
        />
        <Card.Body>
          <Card.Title>{this.props.mov.title}</Card.Title>
          <Card.Text style={{ height: "200px", overflow: "auto" }}>
            {this.props.mov.overview}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Movie;
