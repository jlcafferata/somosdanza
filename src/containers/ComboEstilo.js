import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import ItemCombo from "../components/ItemCombo";
class ComboEstilo extends Component {
  state = {
    encuentro: ""
  };
  estilos = [
    {
      encuentro: "audicion_vivo",
      estilos: [
        { codigo: "teatro", descripcion: "Teatro" },
        { codigo: "danza_teatro", descripcion: "Danza Teatro" },
        { codigo: "comedia_musical", descripcion: "Comedia Musical" },
        { codigo: "showdance", descripcion: "Showdance" }
      ]
    },
    {
      encuentro: "brasil_kids",
      estilos: [
        {
          codigo: "danza_jazz_lyrical_jazz",
          descripcion: "Danza Jazz - Lyrical Jazz"
        },
        { codigo: "contemporaneo", descripcion: "Contemporaneo" },
        { codigo: "jazz_contemporaneo", descripcion: "Jazz contemporaneo" },
        { codigo: "contemporaneo_fusion", descripcion: "Contemporaneo fusion" },
        {
          codigo: "theater_jazz_modern_jazz",
          descripcion: "Theater Jazz Modern Jazz"
        },
        {
          codigo: "street_dance_reggaeton",
          descripcion: "Street dance - Reggaeton"
        },
        { codigo: "hip_hop_fusion", descripcion: "Hip Hop - Hip Hop Fusion" },
        { codigo: "ritmos_urbanos", descripcion: "Ritmos Urbanos" },
        {
          codigo: "danza_teatro_show_dance",
          descripcion: "Danza Teatro - Show dance"
        },
        { codigo: "k_pop", descripcion: "K-pop" },
        { codigo: "ritmos_latinos_afro", descripcion: "Ritmos Latinos - Afro" },
        { codigo: "bollywood", descripcion: "Bollywood" },
        { codigo: "folclore", descripcion: "Folclore" },
        { codigo: "danza_libre", descripcion: "Danza Libre" }
      ]
    },
    {
      encuentro: "danza_libre_florianopolis",
      estilos: [
        {
          codigo: "danza_libre_free_dance",
          descripcion: "Danza libre - Free dance"
        },
        { codigo: "ritmos_latinos", descripcion: "Ritmos latinos" },
        { codigo: "axe", descripcion: "Axe" },
        { codigo: "afro", descripcion: "Afro" },
        { codigo: "merengue", descripcion: "Merengue" },
        { codigo: "salsa", descripcion: "Salsa" },
        { codigo: "bachata", descripcion: "Bachata" },
        { codigo: "mambo", descripcion: "Mambo" },
        { codigo: "cha_cha_cha", descripcion: "Cha cha cha" },
        { codigo: "ballroom", descripcion: "Ballroom" }
      ]
    },
    {
      encuentro: "baby_infantil",
      estilos: [
        {
          codigo: "danza_jazz_lyrical_jazz",
          descripcion: "Danza Jazz - Lyrical Jazz"
        },
        { codigo: "contemporaneo", descripcion: "Contemporaneo" },
        { codigo: "jazz_contemporaneo", descripcion: "Jazz contemporaneo" },
        { codigo: "contemporaneo_fusion", descripcion: "Contemporaneo fusion" },
        {
          codigo: "theater_jazz_modern_jazz",
          descripcion: "Theater Jazz Modern Jazz"
        },
        {
          codigo: "street_dance_reggaeton",
          descripcion: "Street dance - Reggaeton"
        },
        { codigo: "hip_hop_fusion", descripcion: "Hip Hop - Hip Hop Fusion" },
        { codigo: "ritmos_urbanos", descripcion: "Ritmos Urbanos" },
        {
          codigo: "danza_teatro_show_dance",
          descripcion: "Danza Teatro - Show dance"
        },
        {
          codigo: "k_pop_latino_afro_axe",
          descripcion: "K-pop - Latino - Afro - Axe"
        },
        {
          codigo: "danza_clasica_neoclasico",
          descripcion: "Danza clasica - Neoclasico"
        },
        { codigo: "bollywood_arabe", descripcion: "Bollywood - Arabe" },
        { codigo: "folclore_espanol", descripcion: "Folclore - Espanol" },
        { codigo: "danza_libre", descripcion: "Danza Libre" }
      ]
    },
    {
      encuentro: "folclore",
      estilos: [
        { codigo: "pareja_estilizada", descripcion: "Pareja Estilizada" },
        {
          codigo: "malambo_sureno",
          descripcion: "Malambo sureno (4 a 8 particip)"
        },
        {
          codigo: "malambo_combinado",
          descripcion: "Malambo combinado (4 a 8 particip)"
        },
        {
          codigo: "malambo_femenino",
          descripcion: "Malambo femenino (4 a 8 particip)"
        },
        {
          codigo: "conjunto_femenino",
          descripcion: "Conjunto femenino (a partir de 4 particip)"
        },
        {
          codigo: "conjunto_estilizado",
          descripcion: "Conjunto estilizado (a partir de 8 particip)"
        },
        {
          codigo: "conjunto_tradicional",
          descripcion: "Conjunto tradicional (a partir de 4 particip)"
        }
      ]
    },
    {
      encuentro: "juvenil_adulto",
      estilos: [
        {
          codigo: "danza_jazz_lyrical_jazz",
          descripcion: "Danza Jazz - Lyrical Jazz"
        },
        { codigo: "contemporaneo", descripcion: "Contemporaneo" },
        { codigo: "jazz_contemporaneo", descripcion: "Jazz contemporaneo" },
        { codigo: "contemporaneo_fusion", descripcion: "Contemporaneo fusion" },
        {
          codigo: "theater_jazz_modern_jazz",
          descripcion: "Theater Jazz Modern Jazz"
        },
        {
          codigo: "street_dance_reggaeton",
          descripcion: "Street dance - Reggaeton"
        },
        { codigo: "hip_hop_fusion", descripcion: "Hip Hop - Hip Hop Fusion" },
        { codigo: "ritmos_urbanos", descripcion: "Ritmos Urbanos" },
        {
          codigo: "danza_teatro_show_dance",
          descripcion: "Danza Teatro - Show dance"
        },
        {
          codigo: "k_pop_latino_afro_axe",
          descripcion: "K-pop - Latino - Afro - Axe"
        },
        {
          codigo: "danza_clasica_neoclasico",
          descripcion: "Danza clasica - Neoclasico"
        },
        { codigo: "bollywood_arabe", descripcion: "Bollywood - Arabe" },
        { codigo: "folclore_espanol", descripcion: "Folclore - Espanol" },
        { codigo: "danza_libre", descripcion: "Danza Libre" }
      ]
    },
    {
      encuentro: "los_angeles",
      estilos: [
        { codigo: "hip_hop_fusion", descripcion: "Hip hop - Hip hop fusion" },
        { codigo: "street_dance", descripcion: "Street dance" },
        { codigo: "dance_hall", descripcion: "Dance hall" },
        { codigo: "locking_popping", descripcion: "Locking-popping" },
        { codigo: "reggaeton", descripcion: "Reggaeton" },
        { codigo: "breaking", descripcion: "Breaking" },
        { codigo: "new_style", descripcion: "New Style" },
        { codigo: "ritmos_urbano", descripcion: "Ritmos urbanos" },
        { codigo: "femme_style", descripcion: "Femme style" },
        { codigo: "waacking", descripcion: "Waacking" },
        { codigo: "house_dance", descripcion: "House dance" },
        { codigo: "krumping", descripcion: "Krumping" },
        { codigo: "bogue", descripcion: "Bogue" },
        { codigo: "street_jazz_funk", descripcion: "Street jazz - Jazz funk" }
      ]
    },
    {
      encuentro: "new_york",
      estilos: [
        { codigo: "danza_jazz", descripcion: "Danza Jazz " },
        { codigo: "lyrical_jazz", descripcion: "Lyrical Jazz" },
        { codigo: "contemporaneo", descripcion: "Contemporaneo" },
        { codigo: "jazz_contemporaneo", descripcion: "Jazz contemporaneo" },

        { codigo: "theater_jazz", descripcion: "Theater Jazz " },
        { codigo: "modern_jazz", descripcion: "Modern Jazz" },
        { codigo: "contemporaneo_fusion", descripcion: "Contemporaneo fusion" },
        { codigo: "street_jazz", descripcion: "Street jazz" },
        { codigo: "hip_hop_fusion", descripcion: "Hip Hop - Hip Hop Fusion" },
        { codigo: "danza_teatro", descripcion: "Danza Teatro" },
        { codigo: "danza_libre", descripcion: "Danza Libre" }
      ]
    },
    {
      encuentro: "oriental",
      estilos: [
        { codigo: "danza_arabe", descripcion: "Danza arabe" },
        { codigo: "flamenco_arabe", descripcion: "Flamenco arabe" },
        { codigo: "tango_arabe", descripcion: "Tango arabe" },
        { codigo: "reggeaton_arabe", descripcion: "Reggaeton arabe" },
        { codigo: "tribal_dance", descripcion: "Tribal dance" },
        { codigo: "danza_india", descripcion: "Danza india" },
        { codigo: "bollywood", descripcion: "Bollywood" },
        { codigo: "danza_con_elementos", descripcion: "Danzas con elementos" },
        { codigo: "Oriental", descripcion: "oriental" },
        { codigo: "percusion", descripcion: "Percusion" },
        { codigo: "tradicional", descripcion: "Tradicional" },
        { codigo: "danza_con_velos", descripcion: "Danza con velos" },
        { codigo: "fusion", descripcion: "Fusion" }
      ]
    },
    {
      encuentro: "solistas_duos",
      estilos: [
        {
          codigo: "danza_jazz_lyrical_jazz",
          descripcion: "Danza Jazz - Lyrical Jazz"
        },
        { codigo: "contemporaneo", descripcion: "Contemporaneo" },
        { codigo: "jazz_contemporaneo", descripcion: "Jazz contemporaneo" },
        { codigo: "contemporaneo_fusion", descripcion: "Contemporaneo fusion" },
        {
          codigo: "theater_jazz_modern_jazz",
          descripcion: "Theater Jazz Modern Jazz"
        },
        {
          codigo: "street_dance_reggaeton",
          descripcion: "Street dance - Reggaeton"
        },
        { codigo: "hip_hop_fusion", descripcion: "Hip Hop - Hip Hop Fusion" },
        { codigo: "ritmos_urbanos", descripcion: "Ritmos Urbanos" },
        {
          codigo: "danza_teatro_show_dance",
          descripcion: "Danza Teatro - Show dance"
        },
        { codigo: "k_pop", descripcion: "K-pop" },
        { codigo: "ritmos_latinos", descripcion: "Ritmos latinos" },
        { codigo: "bollywood", descripcion: "Bollywood" },
        { codigo: "danza_libre", descripcion: "Danza Libre" }
      ]
    }
  ];

  constructor(props) {
    super(props);
    this.setState({
      encuentro: props.encuentro
    });
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
    let detalle_encuentro = [];
    let self = this;
    this.estilos.forEach(function(valor, indice, array) {
      if (valor.encuentro === self.state.encuentro) {
        detalle_encuentro = valor.estilos;
        return;
      }
    });
    return (
      <div>
        <Form.Label>Estilo</Form.Label>
        <Form.Control as="select" id="estilo" onChange={this.handlerChange}>
          <option key="" value="">
            Seleccione...
          </option>
          {detalle_encuentro.map(valor => (
            <ItemCombo key={valor.codigo} item={valor} />
          ))}
        </Form.Control>
      </div>
    );
  }
}

ComboEstilo.propTypes = {
  onChange: PropTypes.func,
  encuentro: PropTypes.string
};

export default ComboEstilo;
