import React, { Component } from "react";
import PropTypes from "prop-types";
import * as studentAction from "../store/actions/studentAction";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class ListInscriptions extends Component {
  constructor(props) {
    super(props);
    this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount() {
    this.props.getObrasStored();
  }

  getStudents(e) {
    let obra = e.target.value;
    e.preventDefault();
    e.stopPropagation();
    this.props.getStudentsStored(obra);
  }

  render() {
    // Access your items from local component state
    const { obras, students } = this.props;
    let total = 0;
    let obraAnt = "";
    let self = this;

    return (
      <React.Fragment>
        {obras.length <= 0 && <h1>Espera un cacho NNeatrero impaciente....</h1>}
        {obras.length > 0 && (
          <Container>
            <h3>Listado de Inscriptos </h3>
            <Row className="justify-content-md-center">
              <Col>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Escuela</th>
                      <th>Provincia</th>
                      <th>Localidad</th>
                      <th>Obra</th>
                      <th>Encuentro</th>
                      <th>Categoria</th>
                      <th>Estilo</th>
                      <th>Coreografo</th>
                      <th>Arancel</th>
                      <th>Detalle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {obras.map(function(item, key) {
                      if (obraAnt != item.obra) {
                        obraAnt = item.obra;
                        total += parseFloat(item.arancel);
                      } else {
                        return;
                      }
                      return (
                        <tr key={key}>
                          <td>{item.escuela}</td>
                          <td>{item.provincia}</td>
                          <td>{item.localidad}</td>
                          <td>{item.obra}</td>
                          <td>{item.encuentro}</td>
                          <td>{item.categoria}</td>
                          <td>{item.estilo}</td>
                          <td>{item.coreografo}</td>
                          <td>${item.arancel}</td>
                          <td>
                            <Button
                              variant="success"
                              value={item.obra}
                              onClick={self.getStudents}
                            >
                              +
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Total: $ {total}</h3>
              </Col>
            </Row>

            {students && students.length > 0 && (
              <Container>
                <h3>
                  Alumnos inscriptos en <b>{students[0].obra}</b>
                </h3>
                <Row className="justify-content-md-center">
                  <Col>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Apellido</th>
                          <th>Nombre</th>
                          <th>Nacimiento</th>
                          <th>Dni</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map(function(item, key) {
                          console.log(item);
                          return (
                            <tr>
                              <td>{item.apellido_alumno}</td>
                              <td>{item.nombre_alumno}</td>
                              <td>{item.nacimiento_alumno}</td>
                              <td>{item.dni_alumno}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
            )}
          </Container>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    obras: state.project.obras || [],
    students: state.project.students || []
  };
};

const mapDispatchToprops = dispatch => {
  return {
    getObrasStored: () => dispatch(studentAction.getObrasStored()),
    getStudentsStored: obra => dispatch(studentAction.getStudentsStored(obra))
  };
};

ListInscriptions.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ListInscriptions);
