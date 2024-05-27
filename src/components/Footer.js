import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          This website was built with blood, sweat, and tears. Mostly tears.
          <br />
          P.S. Don't forget to clear your browser history before the FBI does it
          for you.
          <br />© {new Date().getFullYear()} All rights reversed.
        </p>
        <div className="social-links">
          {/* <a
            href="https://www.facebook.com/allenl.koickal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a> */}
          <a
            href="https://www.instagram.com/allenlkoickal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
