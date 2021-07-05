import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Modal } from "react-bootstrap";
export class ErrorAlert extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideAlert}>
        <Alert
          show={this.props.show}
          variant="danger"
          onClose={this.props.hideAlert}
          dismissible
          style={{ margin: "0", padding: "20px" }}
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>City Not Found</p>
        </Alert>
      </Modal>
    );
  }
}

export default ErrorAlert;
