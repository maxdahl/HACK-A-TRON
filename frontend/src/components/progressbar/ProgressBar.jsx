import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  const containerStyles = {
    height: 14,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft: 14,
    marginRight: 12,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;