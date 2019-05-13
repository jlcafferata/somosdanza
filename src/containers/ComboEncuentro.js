import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
class ComboEncuentro extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    this.props.onChange(e);
  }

  render() {
    return (
      <div>
        <Form.Label>Encuentro</Form.Label>
        <Form.Control as="select" id="encuentro" onChange={this.handlerChange}>
          <option value="">Seleccione...</option>
          <option value="audicion_vivo">Audicion en vivo</option>
          <option value="brasil_kids">Brasil Kids</option>
          <option value="danza_libre_florianopolis">
            Danza libre - Florianopolis
          </option>
          <option value="encuentro_baby_infantil">
            Encuentro Baby Infantil
          </option>
          <option value="folclore">Folclore</option>
          <option value="juvenil_adulto">Juvenil Adulto</option>
          <option value="los_angeles">Los Angeles</option>
          <option value="new_york">New York</option>
          <option value="oriental">Oriental</option>
          <option value="solistas_duos">Solistas y duos</option>
        </Form.Control>
      </div>
    );
  }
}

ComboEncuentro.propTypes = {};

export default ComboEncuentro;
