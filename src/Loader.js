import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="complex-loader-container">
      <div className="outer-circle">
        <div className="middle-circle">
          <div className="inner-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
