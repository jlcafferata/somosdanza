import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const GridStudents = ({ students }) => {
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
          {students.map(function(item, key) {
            return (
              <tr key={key}>
                <td>{item.apellido_alumno}</td>
                <td>{item.nombre_alumno}</td>
                <td>{item.nacimiento_alumno}</td>
                <td>{item.dni_alumno}</td>
                <td>
                  <Button variant="danger" size="sm">
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
};

GridStudents.propTypes = {
  students: PropTypes.array
};

export default GridStudents;
