import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import ItemCombo from "../components/ItemCombo";
class ComboCategoria extends Component {
  state = {
    encuentro: ""
  };
  categorias = [
    {
      encuentro: "audicion_vivo",
      categorias: [
        { codigo: "infantil_a", descripcion: "Infantil A (edad: hasta 9)" },
        { codigo: "infantil_b", descripcion: "Infantil B (edad: de 10 a 12)" },
        { codigo: "junior", descripcion: "Junior (edad:de  12 a 14)" },
        { codigo: "juvenil", descripcion: "Juvenil (edad: de 15 a 17)" },
        { codigo: "adulto", descripcion: "Adulto: (edad: de 18 a 34)" },
        { codigo: "senior", descripcion: "Senior (edad: de 35 en adelante)" },
        { codigo: "mix", descripcion: "Mix: (Mixto de edades)" }
      ]
    },
    {
      encuentro: "brasil_kids",
      categorias: [
        { codigo: "infantil_a", descripcion: "Infantil A (edad: de 6 a 8)" },
        { codigo: "infantil_b", descripcion: "Infantil B (edad: de 9 a 12)" },
        { codigo: "junior", descripcion: "Junior (edad: de 13 a 15)" },
        { codigo: "mix", descripcion: "Mix: (Mixto de edades)" }
      ]
    },
    {
      encuentro: "danza_libre_florianopolis",
      categorias: [
        { codigo: "infantil_a", descripcion: "Infantil A (edad: hasta 9)" },
        { codigo: "infantil_b", descripcion: "Infantil B (edad: de 10 a 12)" },
        { codigo: "junior", descripcion: "Junior (edad:de  12 a 14)" },
        { codigo: "juvenil", descripcion: "Juvenil (edad: de 15 a 17)" },
        { codigo: "adulto", descripcion: "Adulto: (edad: de 18 a 34)" },
        { codigo: "senior", descripcion: "Senior (edad: de 35 en adelante)" },
        { codigo: "mix", descripcion: "Mix: (Mixto de edades)" }
      ]
    },
    {
      encuentro: "baby_infantil",
      categorias: [
        { codigo: "baby", descripcion: "Infantil A (edad: de 3 a 5)" },
        { codigo: "infantil_a", descripcion: "Infantil B (edad: de 6 a 9)" },
        { codigo: "infantil_b", descripcion: "Junior (edad: de  10 a 13)" },
        { codigo: "mix", descripcion: "Mix: (Mixto de edades)" }
      ]
    },
    {
      encuentro: "folclore",
      categorias: [
        { codigo: "infantil", descripcion: "Infantil (edad: hasta 13)" },
        { codigo: "juvenil", descripcion: "Juvenil (edad: de 14 a 18)" },
        { codigo: "mayor", descripcion: "Mayor (edad: de 18 a 35)" },
        { codigo: "adulto", descripcion: "Adulto (edad: 36 en adelante)" }
      ]
    },
    {
      encuentro: "juvenil_adulto",
      categorias: [
        { codigo: "juvenil", descripcion: "Juvenil (edad: de 14 a 17)" },
        { codigo: "adulto", descripcion: "Adulto (edad: 18 en adelante)" },
        { codigo: "mix", descripcion: "Mix: (Mixto de edades)" }
      ]
    },
    {
      encuentro: "los_angeles",
      categorias: [
        {
          codigo: "small_crew",
          descripcion: "Small Crew (6 a 10 integranter)"
        },
        {
          codigo: "mega_crew",
          descripcion: "Mega crew (11 integrantes en adelante)"
        }
      ]
    },
    {
      encuentro: "new_york",
      categorias: [
        { codigo: "juvenil", descripcion: "Juvenil (edad: de 13 a 17)" },
        { codigo: "adulto", descripcion: "Adulto: (edad: 18 en adelante)" },
        { codigo: "mix", descripcion: "Mix: (Mixto de edades)" }
      ]
    },
    {
      encuentro: "oriental",
      categorias: [
        { codigo: "infantil_a", descripcion: "Infantil A (edad: hasta 9)" },
        { codigo: "infantil_b", descripcion: "Infantil B (edad: de 10 a 12)" },
        { codigo: "junior", descripcion: "Junior (edad:de  12 a 14)" },
        { codigo: "juvenil", descripcion: "Juvenil (edad: de 15 a 17)" },
        { codigo: "adulto", descripcion: "Adulto: (edad: de 18 a 34)" },
        { codigo: "senior", descripcion: "Senior (edad: de 35 en adelante)" },
        { codigo: "mix", descripcion: "Mix: (Mixto de edades)" }
      ]
    },
    {
      encuentro: "solistas_duos",
      categorias: [
        { codigo: "juvenil", descripcion: "Juvenil (edad: de 13 a 17)" },
        { codigo: "adulto", descripcion: "Adulto: (edad: 18 en adelante)" }
      ]
    }
  ];

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

  componentWillReceiveProps(options) {
    this.setState({
      encuentro: options.encuentro
    });
  }

  render() {
    let detalle_categoria = [];
    let self = this;
    this.categorias.forEach(function(valor, indice, array) {
      if (valor.encuentro === self.state.encuentro) {
        detalle_categoria = valor.categorias;
        return;
      }
    });
    return (
      <div>
        <Form.Label>Categoria</Form.Label>
        <Form.Control as="select" id="categoria" onChange={this.handlerChange}>
          <option key="" value="">
            Seleccione...
          </option>
          {detalle_categoria.map(valor => (
            <ItemCombo key={valor.codigo} item={valor} />
          ))}
        </Form.Control>
      </div>
    );
  }
}

ComboCategoria.propTypes = {
  onChange: PropTypes.func,
  encuentro: PropTypes.string
};

export default ComboCategoria;
