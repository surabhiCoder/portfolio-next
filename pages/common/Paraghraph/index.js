import React from "react";
import propTypes from "prop-types";

const Paragraph = ({ paraInfo }) => <p> {paraInfo} </p>;

Paragraph.propTypes = {
  paraInfo: propTypes.string.isRequired,
};

export default Paragraph;
