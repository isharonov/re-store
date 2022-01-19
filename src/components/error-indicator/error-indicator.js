import React from "react";

import "./error-indicator.css";
import icon from "./error-icon.svg";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} width="100" height="100" alt="Error icon"/>
      <span className="error">Error!</span>
      <span> Something has gone terribly wrong</span>
    </div>
  );
}

export default ErrorIndicator;