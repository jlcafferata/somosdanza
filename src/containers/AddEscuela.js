import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GridStudents from "./../components/GridStudents";
import { connect } from "react-redux";

import ReactNotification from "react-notifications-component";

import * as studentAction from "../store/actions/studentAction";
import AddStudent from "./AddStudent";

class AddEscuela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      coreografo: "",
      duracion: "",
      estilo: "",
      categoria: "",
      encuentro: "",
      dni: "",
      email: "",
      telefono: "",
      localidad: "",
      provincia: "",
      arancel: "",
      isAddStudent: false
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.showAddStudent = this.showAddStudent.bind(this);
    this.hideAddStudent = this.hideAddStudent.bind(this);
    this.validate = this.validate.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.notificationAddEscuela = React.createRef();
  }

  addNotification(props) {
    this.notificationAddEscuela.current.addNotification({
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
    this.props.addEscuela(this.state);
  }
  showAddStudent() {
    if (this.validate()) {
      this.setState({ isAddStudent: true });
    } else {
      this.addNotification({
        title: "Atencion",
        message: "Debe ingresar todos los campos antes de agregar alumnos",
        type: "danger"
      });
    }
  }
  hideAddStudent() {
    this.setState({ isAddStudent: false });
  }
  validate() {
    return (
      this.state.coreografo != "" &&
      this.state.duracion != "" &&
      this.state.estilo != "" &&
      this.state.categoria != "" &&
      this.state.encuentro != "" &&
      this.state.dni != "" &&
      this.state.email != "" &&
      this.state.telefono != "" &&
      this.state.localidad != "" &&
      this.state.provincia != "" &&
      this.state.arancel != ""
    );
  }

  render() {
    const students = this.props.students;
    let modalClose = () => this.setState({ isAddStudent: false });

    return (
      <div>
        <Form
          onSubmit={this.handlerSubmit}
          className="justify-content-md-center">
          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="escuela">
              <Form.Label>Escuela/Compañ&iacute;a</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="obra">
              <Form.Label>Nombre de la obra</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="coreografo">
              <Form.Label>Core&oacute;grafo/ Maestro</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="duracion">
              <Form.Label>Duraci&oacute;n de la obra</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="estilo">
              <Form.Label>Estilo/Modalidad</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="categoria">
              <Form.Label>Categor&iacute;a/Divisi&oacute;n</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="encuentro">
              <Form.Label>Encuentro</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="dni">
              <Form.Label>DNI</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese email" />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="telefono">
              <Form.Label>Tel&eacute;fono</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="localidad">
              <Form.Label>Localidad</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="provincia">
              <Form.Label>Provincia</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group
              as={Col}
              md="3"
              onChange={this.handlerChange}
              controlId="arancel">
              <Form.Label>Arancel grupal</Form.Label>
              <Form.Control />
            </Form.Group>
            <Col md={9}>
              <Button variant="info" onClick={this.showAddStudent}>
                Agregar alumno
              </Button>
            </Col>
          </Form.Row>
          {students && students.length > 0 && (
            <GridStudents students={students} />
          )}
          {students && students.length > 0 && (
            <Row md={12}>
              <Col md={4} />
              <Col md={8}>
                <Button variant="success">Finalizar carga de datos</Button>
              </Col>
            </Row>
          )}
        </Form>
        <Modal show={this.state.isAddStudent} onHide={this.hideAddStudent}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar alumno al certamen</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <AddStudent onHide={modalClose} />
          </Modal.Body>
        </Modal>
        <ReactNotification ref={this.notificationAddEscuela} />
      </div>
    );
  }
}

AddEscuela.propTypes = {
  students: PropTypes.array,
  addEscuela: PropTypes.func
};

const mapStateToProps = state => {
  return {
    students: state.project.students || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEscuela: escuela => dispatch(studentAction.addEscuela(escuela))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEscuela);
