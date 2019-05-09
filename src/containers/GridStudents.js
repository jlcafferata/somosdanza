import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import * as studentAction from "../store/actions/studentAction";

class GridStudents extends Component {
  constructor(props) {
    super(props);
    this.handleEliminar = this.handleEliminar.bind(this);
  }

  handleEliminar(e) {
    e.preventDefault();
    console.log("id:" + e.target.value);
    this.props.handleEliminar(e.target.value);
  }

  render() {
    let self = this;
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Fecha Nacimiento</th>
              <th>DNI</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {this.props.students.map(function(item, key) {
              return (
                <tr key={key}>
                  <td>{item.apellido_alumno}</td>
                  <td>{item.nombre_alumno}</td>
                  <td>{item.nacimiento_alumno}</td>
                  <td>{item.dni_alumno}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      value={key}
                      onClick={self.handleEliminar}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

GridStudents.propTypes = {
  students: PropTypes.array
};

const mapDispatchToProps = dispatch => {
  return {
    handleEliminar: id => dispatch(studentAction.delStudent(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GridStudents);
