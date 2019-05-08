import React, { Component } from "react";
import { connect } from "react-redux";
import * as studentAction from "../store/actions/studentAction";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apellido_alumno: "",
      nombre_alumno: "",
      nacimiento_alumno: "",
      dni_alumno: ""
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerNuevo = this.handlerNuevo.bind(this);
  }

  handlerChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handlerSubmit(e) {
    e.preventDefault();
    this.props.addStudent(this.state);
  }
  handlerNuevo(e) {
    e.preventDefault();
    document.getElementById("apellido_alumno").value = "";
    document.getElementById("nombre_alumno").value = "";
    document.getElementById("nacimiento_alumno").value = "";
    document.getElementById("dni_alumno").value = "";
    document.getElementById("apellido_alumno").focus();
  }

  render() {
    return (
      <div className="container">
        <Form
          onSubmit={this.handlerSubmit}
          className="justify-content-md-center"
        >
          <Form.Row>
            <Form.Group
              as={Col}
              md="12"
              onChange={this.handlerChange}
              controlId="apellido_alumno"
            >
              <Form.Label>Apellido</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              onChange={this.handlerChange}
              controlId="nombre_alumno"
            >
              <Form.Label>Nombre</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              onChange={this.handlerChange}
              controlId="nacimiento_alumno"
            >
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              onChange={this.handlerChange}
              controlId="dni_alumno"
            >
              <Form.Label>DNI</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Row>
            <Col md={2}>&nbsp;</Col>
            <Col xs={5} md={5}>
              <Button variant="success" onClick={this.handlerSubmit}>
                Aceptar
              </Button>
            </Col>
            <Col xs={5} md={5}>
              <Button variant="info" onClick={this.handlerNuevo}>
                Agregar otro
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

AddStudent.propTypes = {
  addStudent: PropTypes.func
};
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    addStudent: student => dispatch(studentAction.addStudent(student))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudent);
