import React from "react";
import PropTypes from "prop-types";
import { getFormattedTime } from "../../utils/utils";
import { AUTHOR } from "../../constants/constants";
import "./bubble.css";

export const Bubble = (props) => {
  const { message, timeStamp, author, className } = props;
  const currentUser = sessionStorage.getItem(AUTHOR);
  return (
    <div
      role="listitem"
      className={`bubble ${
        currentUser === author ? "self " : "other "
      } ${className}`}
    >
      <div className="author">{author}</div>
      <p data-test="bubble-message">{message}</p>
      <div className="timeStamp">{getFormattedTime(timeStamp)}</div>
    </div>
  );
};

Bubble.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
  timeStamp: PropTypes.string,
  author: PropTypes.string.isRequired,
  userType: PropTypes.oneOf(["self", "other"]),
};
