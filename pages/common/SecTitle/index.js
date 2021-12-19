// import React from "react";
import propTypes from "prop-types";

const SecTitle = ({ text }) => {
  return (
    <div className="title">
      <h3>{text}</h3>
    </div>
    // console.log(key);
    // let component;
    // switch (variant) {
    //   case "h3": {
    //     component = `<div className="title" key="${variant}"><${variant}>${text}</${variant}></div>`;
    //     return component;
    //   }
    //   default: {
    //     component = "hi";
    //     return component;
    //   }
    // }
  );
};

SecTitle.propTypes = {
  text: propTypes.string.isRequired,
  // variant: propTypes.string.isRequired,
};

export default SecTitle;
