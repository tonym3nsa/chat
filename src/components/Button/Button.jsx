import React, { useState } from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = (props) => {
  const { className, children, type, onClick, isDisabled = false } = props;
  const [focus, setFocus] = useState(false);
  return (
    <button
      disabled={isDisabled}
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      onMouseUp={() => setFocus(false)}
      aria-pressed={focus}
      data-test="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
};
