import React from "react";
import PropTypes from "prop-types";
import "./input.css";

export const Input = (props) => {
  const { className, name, placeholder } = props;

  return (
    <input
      type="text"
      className={`input ${className}`}
      name={name}
      placeholder={placeholder}
      data-test="input"
      aria-label={name}
      aria-required="true"
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};
