import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
class ComboEstilo extends Component {
  state = {
    encuentro: ""
  };
  estilos = [
    {
      audicion_vivo: [
        { teatro: "Teatro" },
        { danza_teatro: "Danza Teatro" },
        { comedia_musical: "Comedia Musical" },
        { showdance: "Showdance" }
      ]
    },
    {
      brasil_kids: [
        { danza_jazz_lyrical_jazz: "Danza Jazz - Lyrical Jazz" },
        { contemporaneo: "Contemporaneo" },
        { jazz_contemporaneo: "Jazz contemporaneo" },
        { contemporaneo_fusion: "Contemporaneo fusion" },
        { theater_jazz_modern_jazz: "Theater Jazz Modern Jazz" },
        { street_dance_reggaeton: "Street dance - Reggaeton" },
        { hip_hop_fusion: "Hip Hop - Hip Hop Fusion" },
        { ritmos_urbanos: "Ritmos Urbanos" },
        { danza_teatro_show_dance: "Danza Teatro - Show dance" },
        { k_pop: "K-pop" },
        { ritmos_latinos_afro: "Ritmos Latinos - Afro" },
        { bollywood: "Bollywood" },
        { folclore: "Folclore" },
        { danza_libre: "Danza Libre" }
      ]
    },
    {
      danza_libre_florianopolis: [
        { danza_libre_free_dance: "Danza libre - Free dance" },
        { ritmos_latinos: "Ritmos latinos" },
        { axe: "Axe" },
        { afro: "Afro" },
        { merengue: "Merengue" },
        { salsa: "Salsa" },
        { bachata: "Bachata" },
        { mambo: "Mambo" },
        { cha_cha_cha: "Cha cha cha" },
        { ballroom: "Ballroom" }
      ]
    },
    {
      baby_infantil: [
        { danza_jazz_lyrical_jazz: "Danza Jazz - Lyrical Jazz" },
        { contemporaneo: "Contemporaneo" },
        { jazz_contemporaneo: "Jazz contemporaneo" },
        { contemporaneo_fusion: "Contemporaneo fusion" },
        { theater_jazz_modern_jazz: "Theater Jazz Modern Jazz" },
        { street_dance_reggaeton: "Street dance - Reggaeton" },
        { hip_hop_fusion: "Hip Hop - Hip Hop Fusion" },
        { ritmos_urbanos: "Ritmos Urbanos" },
        { danza_teatro_show_dance: "Danza Teatro - Show dance" },
        { k_pop_latino_afro_axe: "K-pop - Latino - Afro - Axe" },
        { danza_clasica_neoclasico: "Danza clasica - Neoclasico" },
        { bollywood_arabe: "Bollywood - Arabe" },
        { folclore_espanol: "Folclore - Espanol" },
        { danza_libre: "Danza Libre" }
      ]
    },
    {
      folclore: [
        { pareja_estilizada: "Pareja Estilizada" },
        { malambo_sureno: "Malambo sureno (4 a 8 particip)" },
        { malambo_combinado: "Malambo combinado (4 a 8 particip)" },
        { malambo_femenino: "Malambo femenino (4 a 8 particip)" },
        { conjunto_femenino: "Conjunto femenino (a partir de 4 particip)" },
        { conjunto_estilizado: "Conjunto estilizado (a partir de 8 particip)" },
        {
          conjunto_tradicional: "Conjunto tradicional (a partir de 4 particip)"
        }
      ]
    },
    {
      juvenil_adulto: [
        { danza_jazz_lyrical_jazz: "Danza Jazz - Lyrical Jazz" },
        { contemporaneo: "Contemporaneo" },
        { jazz_contemporaneo: "Jazz contemporaneo" },
        { contemporaneo_fusion: "Contemporaneo fusion" },
        { theater_jazz_modern_jazz: "Theater Jazz Modern Jazz" },
        { street_dance_reggaeton: "Street dance - Reggaeton" },
        { hip_hop_fusion: "Hip Hop - Hip Hop Fusion" },
        { ritmos_urbanos: "Ritmos Urbanos" },
        { danza_teatro_show_dance: "Danza Teatro - Show dance" },
        { k_pop_latino_afro_axe: "K-pop - Latino - Afro - Axe" },
        { danza_clasica_neoclasico: "Danza clasica - Neoclasico" },
        { bollywood_arabe: "Bollywood - Arabe" },
        { folclore_espanol: "Folclore - Espanol" },
        { danza_libre: "Danza Libre" }
      ]
    },
    {
      los_angeles: [
        { hip_hop_fusion: "Hip hop - Hip hop fusion" },
        { street_dance: "Street dance" },
        { dance_hall: "Dance hall" },
        { locking_popping: "Locking-popping" },
        { reggaeton: "Reggaeton" },
        { breaking: "Breaking" },
        { new_style: "New Style" },
        { ritmos_urbano: "Ritmos urbanos" },
        { femme_style: "Femme style" },
        { waacking: "Waacking" },
        { house_dance: "House dance" },
        { krumping: "Krumping" },
        { bogue: "Bogue" },
        { street_jazz_funk: "Street jazz - Jazz funk" }
      ]
    },
    {
      new_york: [
        { danza_jazz: "Danza Jazz " },
        { lyrical_jazz: "Lyrical Jazz" },
        { contemporaneo: "Contemporaneo" },
        { jazz_contemporaneo: "Jazz contemporaneo" },

        { theater_jazz: "Theater Jazz " },
        { modern_jazz: "Modern Jazz" },
        { contemporaneo_fusion: "Contemporaneo fusion" },
        { street_jazz: "Street jazz" },
        { hip_hop_fusion: "Hip Hop - Hip Hop Fusion" },
        { danza_teatro: "Danza Teatro" },
        { danza_libre: "Danza Libre" }
      ]
    },
    {
      oriental: [
        { danza_arabe: "Danza arabe" },
        { flamenco_arabe: "Flamenco arabe" },
        { tango_arabe: "Tango arabe" },
        { reggeaton_arabe: "Reggaeton arabe" },
        { tribal_dance: "Tribal dance" },
        { danza_india: "Danza india" },
        { bollywood: "Bollywood" },
        { danza_con_elementos: "Danzas con elementos" },
        { Oriental: "oriental" },
        { percusion: "Percusion" },
        { tradicional: "Tradicional" },
        { danza_con_velos: "Danza con velos" },
        { fusion: "Fusion" }
      ]
    },
    {
      solistas_duos: [
        { danza_jazz_lyrical_jazz: "Danza Jazz - Lyrical Jazz" },
        { contemporaneo: "Contemporaneo" },
        { jazz_contemporaneo: "Jazz contemporaneo" },
        { contemporaneo_fusion: "Contemporaneo fusion" },
        { theater_jazz_modern_jazz: "Theater Jazz Modern Jazz" },
        { street_dance_reggaeton: "Street dance - Reggaeton" },
        { hip_hop_fusion: "Hip Hop - Hip Hop Fusion" },
        { ritmos_urbanos: "Ritmos Urbanos" },
        { danza_teatro_show_dance: "Danza Teatro - Show dance" },
        { k_pop: "K-pop" },
        { ritmos_latinos: "Ritmos latinos" },
        { bollywood: "Bollywood" },
        { danza_libre: "Danza Libre" }
      ]
    }
  ];

  constructor({ encuentro }) {
    super(props);
    this.setState({
      encuentro: encuentro
    });
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
        <Form.Label>Estilo</Form.Label>
        <Form.Control as="select" id="estilo" onChange={this.handlerChange}>
          <option value="">Seleccione...</option>
        </Form.Control>
      </div>
    );
  }
}

ComboEstilo.propTypes = {};

export default ComboEstilo;
