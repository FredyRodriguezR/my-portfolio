import React, { Component } from 'react';
import '../styles/Principal.css';
import hero from '../images/Sebastian.gif';

class Principal extends Component {
  render() {
    return (
      <div className="container">
        <div className="Principal">
            <h1>Hola! Soy <strong>Fredy Rodriguez </strong><br/> Desarrollador de <strong>Software</strong> con <br/> pasión por los <strong>Videojuegos</strong></h1>
            <img src={hero} className="hero" width="500" height="300" alt="Hero"/>
        </div>
      </div>
    );
  }
}

export default Principal;
