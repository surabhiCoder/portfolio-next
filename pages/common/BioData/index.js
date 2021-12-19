import React from "react";
import propTypes from "prop-types";

const BioData = ({ bioLbl, bioVal }) => {
  return (
    <li>
      <label>{bioLbl}: </label>
      <span>{bioVal}</span>
    </li>
  );
};

BioData.propTypes = {
  bioLbl: propTypes.string.isRequired,
  bioVal: propTypes.any.isRequired,
};

export default BioData;
