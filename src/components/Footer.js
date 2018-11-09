import React, { Component } from 'react';
import '../styles/Footer.css';
import logoAshara from '../images/Ashara Games Blanco.png';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <div className="container">
            <div>
              <p>Portafolio Fredy Rodriguez<img src={logoAshara} alt="Logo Platzi" width="80px"/></p>
            </div>
            <div>
              <p>Designed with {"<3"} by <a href="https://twitter.com/thespianartist">@thespianartist</a></p>
            </div>
          </div>
      </div>
    );
  }
}

export default Footer;
