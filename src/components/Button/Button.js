import PropTypes from "prop-types";
import React from "react";
import { StyledButton } from "./Button.style";

export function Button(props) {
  const { onClick, titulo = "Ver Mais", cor } = props;

  return (
    <StyledButton corBotao={cor} onClick={onClick}>
      {titulo}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};