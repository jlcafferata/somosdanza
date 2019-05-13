import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
class ComboProvincias extends Component {
  render() {
    return (
      <div>
        <Form.Label>Provincia</Form.Label>
        <Form.Control
          as="select"
          onChange={this.handlerChange}
          controlId="provincia"
        >
          <option value="buenos_aires">Buenos Aires</option>
          <option value="catamarca">Catamarca</option>
          <option value="chaco">Chaco</option>
          <option value="chubut">Chubut</option>
          <option value="cordoba">Cordoba</option>
          <option value="corrientes">Corrientes</option>
          <option value="entre_rios">Entre Rios</option>
          <option value="formosa">Formosa</option>
          <option value="jujuy">Jujuy</option>
          <option value="la_pampa">La Pampa</option>
          <option value="la_rioja">La Rioja</option>
          <option value="mendoza">Mendoza</option>
          <option value="misiones">Misiones</option>
          <option value="neuquen">Neuquén</option>
          <option value="rio_negro">Río Negro</option>
          <option value="salta">Salta</option>
          <option value="san_juan">San Juan</option>
          <option value="san_luis">San Luis</option>
          <option value="santa_cruz">Santa Cruz</option>
          <option value="santa_fe">Santa Fe</option>
          <option value="santiago_del_estero">Santiago del Estero</option>
          <option value="tierra_del_fuego">Tierra del Fuego</option>
          <option value="tucuman">Tucuman</option>
        </Form.Control>
      </div>
    );
  }
}

ComboProvincias.propTypes = {};

export default ComboProvincias;
