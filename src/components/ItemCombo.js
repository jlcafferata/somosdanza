import React from "react";
import PropTypes from "prop-types";

const ItemCombo = props => {
  return (
    <option key={props.item.codigo} value={props.item.codigo}>
      {props.item.descripcion}
    </option>
  );
};

ItemCombo.propTypes = {
  item: PropTypes.object
};
export default ItemCombo;
