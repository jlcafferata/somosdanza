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

import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";

class AddEscuela extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.addEscuelaFirebase(this.state, this.props.students);
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
      this.state.arancel != ""
    );
  }

  render() {
    const students = this.props.students;
    let modalClose = () => this.setState({ isAddStudent: false });

    return (
      <React.Fragment>
        <Container>
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
                  <Form.Group
                    as={Col}
                    md="2"
                    onChange={this.handlerChange}
                    controlId="localidad">
                    <Form.Label>Localidad</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="2"
                    onChange={this.handlerChange}
                    controlId="provincia">
                    <Form.Label>Provincia</Form.Label>
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
                    md="2"
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
                    <Form.Label>Estilo</Form.Label>
                    <Form.Control as="select">
                      <option value="libre">Libre</option>
                      <option value="colaborativo">Colaborativo</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="3"
                    onChange={this.handlerChange}
                    controlId="categoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select">
                      <option value="jazz">Jazz</option>
                      <option value="brasilero">Brasilero</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="3"
                    onChange={this.handlerChange}
                    controlId="encuentro">
                    <Form.Label>Encuentro</Form.Label>
                    <Form.Control as="select">
                      <option value="cercano">Cercano del 3er tipo</option>
                      <option value="lejano">Lejano del 2do tipo</option>
                    </Form.Control>
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
                {students && students.length > 0 && (
                  <GridStudents students={students} />
                )}
                {students && students.length > 0 && (
                  <Row md={12}>
                    <Col md={5} />
                    <Col md={7}>
                      <Button variant="success" onClick={this.handlerSubmit}>
                        Finalizar carga de datos
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
      dispatch(studentAction.addEscuelaFirebase(escuela, students))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEscuela);
