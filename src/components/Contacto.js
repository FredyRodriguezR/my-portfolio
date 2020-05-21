import React, { Component } from 'react';
import '../styles/Contacto.css';

class Contacto extends Component {
  render() {
    return (
      <div className="Contacto">
      <div className="container">
        <div className="social">
          <a href="https://twitter.com/chimpabastian" rel="noopener noreferrer" className="social-link twitter" target="_blank"> </a>
          <a href="https://www.facebook.com/chimpabastian" rel="noopener noreferrer" className="social-link facebook" target="_blank"> </a>
          <a href="https://github.com/FredyRodriguezR"  rel="noopener noreferrer" className="social-link github" target="_blank"> </a>
          <a href="https://www.instagram.com/chimpabastian" rel="noopener noreferrer" className="social-link instagram" target="_blank"> </a>
          <a href="https://www.linkedin.com/in/fredy-sebastian-rodriguez-rincon-b11239129/" rel="noopener noreferrer" className="social-link linkedin" target="_blank"> </a>
          <a href="https://steamdb.info/calculator/76561198042289628/?cc=co" rel="noopener noreferrer" className="social-link steam" target="_blank"> </a>
        </div>
      </div>
      </div>
    );
  }
}

export default Contacto;
