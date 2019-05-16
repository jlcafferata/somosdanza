import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ReactNotification from "react-notifications-component";

import GridStudents from "./GridStudents";

import { connect } from "react-redux";
import * as studentAction from "../store/actions/studentAction";
import AddStudent from "./AddStudent";

import ComboProvincias from "./ComboProvincias";
import ComboEncuentro from "./ComboEncuentro";
import ComboEstilo from "./ComboEstilo";
import ComboCategoria from "./ComboCategoria";

class AddEscuela extends Component {
  initialState = {
    escuela: "",
    obra: "",
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
    students: [],
    isAddStudent: false
  };
  constructor(props) {
    super(props);
    this.state = this.initialState;

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerReset = this.handlerReset.bind(this);
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
    this.props.addEscuelaFirebase(this.state, this.props.students).then(() => {
      this.addNotification({
        title: "Informacion",
        message: "Inscripcion exitosa",
        type: "success"
      });
    });
  }
  handlerReset(e) {
    e.preventDefault();
    document.getElementById("escuela").value = "";
    document.getElementById("provincia").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("obra").value = "";
    document.getElementById("duracion").value = "";
    document.getElementById("encuentro").value = "";
    document.getElementById("estilo").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("arancel").value = "";
    document.getElementById("coreografo").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";

    this.props.reset();
  }
  showAddStudent() {
    if (this.validate()) {
      this.setState({ isAddStudent: true });
    } else {
      if (this.state.email != "" && this.state.email.indexOf("@") < 0) {
        this.addNotification({
          title: "Atencion",
          message: "Debe ingresar una direccion de email valida",
          type: "danger"
        });
      } else {
        this.addNotification({
          title: "Atencion",
          message: "Debe ingresar todos los campos antes de agregar alumnos",
          type: "danger"
        });
      }
    }
  }
  hideAddStudent() {
    this.setState({ isAddStudent: false });
  }
  validate() {
    return (
      this.state.escuela != "" &&
      this.state.obra != "" &&
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
      this.state.arancel != "" &&
      this.state.email.indexOf("@") > 0
    );
  }

  render() {
    const students = this.props.students;
    let modalClose = () => this.setState({ isAddStudent: false });

    return (
      <React.Fragment>
        <Container>
          <h3>Inscripcion al certamen</h3>
          <Row className="justify-content-md-center">
            <Col>
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

                  <Form.Group as={Col} md="3">
                    <ComboProvincias onChange={this.handlerChange} />
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
                    md="2"
                    onChange={this.handlerChange}
                    controlId="obra">
                    <Form.Label>Nombre de la obra</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="1"
                    onChange={this.handlerChange}
                    controlId="duracion">
                    <Form.Label>Duraci&oacute;n</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md="3">
                    <ComboEncuentro
                      onChange={this.handlerChange}
                      encuentro={this.state.encuentro}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="3">
                    <ComboEstilo
                      onChange={this.handlerChange}
                      encuentro={this.state.encuentro}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="3">
                    <ComboCategoria
                      onChange={this.handlerChange}
                      encuentro={this.state.encuentro}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="3"
                    onChange={this.handlerChange}
                    controlId="arancel">
                    <Form.Label>Arancel grupal $:</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
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
                    controlId="dni">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control />
                  </Form.Group>
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
                  <Col md={5} />
                  <Col md={7}>
                    <Button variant="info" onClick={this.showAddStudent}>
                      Agregar alumno
                    </Button>
                  </Col>
                </Form.Row>
                <br />
                {students && students.length > 0 && (
                  <GridStudents students={students} />
                )}
                {students && students.length > 0 && (
                  <Row md={12}>
                    <Col md={4} />
                    <Col md={3}>
                      <Button variant="success" onClick={this.handlerSubmit}>
                        Finalizar carga de datos
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button variant="danger" onClick={this.handlerReset}>
                        Cancelar
                      </Button>
                    </Col>
                  </Row>
                )}
              </Form>
              <Modal
                show={this.state.isAddStudent}
                onHide={this.hideAddStudent}>
                <Modal.Header closeButton>
                  <Modal.Title>Agregar alumno al certamen</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <AddStudent onHide={modalClose} />
                </Modal.Body>
              </Modal>
              <ReactNotification ref={this.notificationAddEscuela} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

AddEscuela.propTypes = {
  students: PropTypes.array,
  addEscuela: PropTypes.func,
  addEscuelaFirebase: PropTypes.func
};

const mapStateToProps = state => {
  return {
    students: state.project.students || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEscuela: escuela => dispatch(studentAction.addEscuela(escuela)),
    addEscuelaFirebase: (escuela, students) =>
      dispatch(studentAction.addEscuelaFirebase(escuela, students)),
    reset: () => dispatch(studentAction.reset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEscuela);
