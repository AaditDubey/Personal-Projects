import React from "react";
import "./InfoForm.css";
const Status = ({ count }) => {
  const blueLength = ["0%", "25%", "50%", "75%", "100%"];

  return (
    <div className="grey-bar">
      <div
        className="blue-bar"
        style={{ width: blueLength[Math.abs(count)] }}
      ></div>
    </div>
  );
};

export default Status;
