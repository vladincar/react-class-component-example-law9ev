import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onAdd }) => {
  return (
    <button
      onClick={onAdd}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
