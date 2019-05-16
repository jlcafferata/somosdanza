import React, { Component } from "react";
import PropTypes from "prop-types";
import * as studentAction from "../store/actions/studentAction";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Table from "react-bootstrap/Table";

class ListInscriptions extends Component {
  componentDidMount() {
    this.props.getStudentsStored();
  }

  render() {
    // Access your items from local component state
    const { students } = this.props;

    return (
      <React.Fragment>
        {students.length <= 0 && (
          <h1>Procesando... espera NNeatrero impaciente....</h1>
        )}
        {students.length > 0 && (
          <Container>
            <h3>Listado de Inscriptos</h3>
            <Row className="justify-content-md-center">
              <Col>
                <Table striped bordered hover>
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
                      <th>Apellido</th>
                      <th>Nombre</th>
                      <th>Nacimiento</th>
                      <th>Dni</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(function(item, key) {
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.project.students || []
  };
};

const mapDispatchToprops = dispatch => {
  return {
    getStudentsStored: () => dispatch(studentAction.getStudentsStored())
  };
};

ListInscriptions.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ListInscriptions);
