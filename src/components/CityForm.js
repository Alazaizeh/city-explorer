import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
class CityForm extends Component {
  /**
   *
   * @param {Event} e
   */
  submitForm = (e) => {
    e.preventDefault();
    if (e.target.cityName.value !== "") {
      this.props.submitForm(e);
    }
  };
  render() {
    return (
      <Form className="form" onSubmit={this.submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city name, example: Amman"
            name="cityName"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Explor
        </Button>
      </Form>
    );
  }
}

export default CityForm;
