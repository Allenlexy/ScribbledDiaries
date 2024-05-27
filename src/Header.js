import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="digitaltitle-link">
        <h1 className="digitaltitle">
          D<span className="red-i">i</span>gital{" "}
          <span className="red-i">S</span>cr<span className="red-i">i</span>
          bbles
        </h1>
      </Link>
      <div className="line"></div>
    </div>
  );
};

export default Header;
