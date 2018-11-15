import React, { Component } from 'react';
import '../styles/Contacto.css';

class Contacto extends Component {
  render() {
    return (
      <div className="Contacto">
      <div className="container">
        <form  className="form-email" action="">
          <h3>¿Creamos algo juntos?</h3>
          <input className="input-email" type="text" placeholder="Déjame tu email"></input>
          <input className="submit-button" type="submit" value="Enviar"></input>
        </form>
        <div className="social">
          <a href="https://twitter.com/Kimbley5" rel="noopener noreferrer" className="social-link twitter" target="_blank"> </a>
          <a href="https://www.facebook.com/fredy.rodriguez.902" rel="noopener noreferrer" className="social-link facebook" target="_blank"> </a>
          <a href="https://github.com/SolfKimbley"  rel="noopener noreferrer" className="social-link github" target="_blank"> </a>
          <a href="https://www.instagram.com/zolfkimbley" rel="noopener noreferrer" className="social-link instagram" target="_blank"> </a>
          <a href="https://www.linkedin.com/in/fredy-sebastian-rodriguez-rincon-b11239129/" rel="noopener noreferrer" className="social-link linkedin" target="_blank"> </a>
        </div>
      </div>
      </div>
    );
  }
}

export default Contacto;
