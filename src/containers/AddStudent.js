import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactNotification from "react-notifications-component";

import * as studentAction from "../store/actions/studentAction";
import PropTypes from "prop-types";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apellido_alumno: "",
      nombre_alumno: "",
      nacimiento_alumno: "",
      dni_alumno: "",
      showSuccessAddAlumno: false
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerNuevo = this.handlerNuevo.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.notificationAddStudent = React.createRef();
    this.validate = this.validate.bind(this);
  }

  addNotification(props) {
    this.notificationAddStudent.current.addNotification({
      title: props.title,
      message: props.message,
      type: props.type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 3000 },
      dismissable: { click: true }
    });
  }

  handlerChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handlerSubmit(e) {
    e.preventDefault();
    if (this.validate()) {
      this.props.addStudent(this.state);
      this.addNotification({
        title: "Informacion",
        message: "Alumno agregado exitosamente",
        type: "success"
      });
      this.handlerNuevo(e);
    } else {
      this.addNotification({
        title: "Atencion",
        message: "Debe ingresar todos los campos",
        type: "danger"
      });
    }
  }
  handlerNuevo(e) {
    e.preventDefault();
    document.getElementById("apellido_alumno").value = "";
    document.getElementById("nombre_alumno").value = "";
    document.getElementById("nacimiento_alumno").value = "";
    document.getElementById("dni_alumno").value = "";
    document.getElementById("apellido_alumno").focus();
  }

  validate() {
    return (
      this.state.apellido_alumno != "" &&
      this.state.nombre_alumno != "" &&
      this.state.nacimiento_alumno != "" &&
      this.state.dni_alumno != ""
    );
  }

  render() {
    return (
      <React.Fragment>
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
              <Button variant="danger" onClick={this.props.onHide}>
                Cancelar
              </Button>
            </Col>
          </Row>
        </Form>

        <ReactNotification ref={this.notificationAddStudent} />
      </React.Fragment>
    );
  }
}

AddStudent.propTypes = {
  addStudent: PropTypes.func,
  onHide: PropTypes.func
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
