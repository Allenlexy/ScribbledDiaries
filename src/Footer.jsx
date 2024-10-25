import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 

const Footer = () => {
  return (
    <div style={styles.footer}>
      <p style={styles.p}>Made with ♡ by Allen Lexy</p>
      <a href="https://allen-l-koickal.vercel.app/" target="_blank" rel="noopener noreferrer" style={styles.link}>
        <FontAwesomeIcon icon={faGlobe} style={styles.icon} /> Visit My Portfolio
      </a>
    </div>
  );
};

// Inline CSS styles
const styles = {
  footer: {
    marginTop: '25px',  
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    fontSize: '16px',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  link: {
    display: 'inline-block',
    marginTop: '10px',
    textDecoration: 'none',
    color: '#675AFC',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '8px',
  },
  p:{
    color:'grey'
  }
};

export default Footer;
