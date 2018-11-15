import React, { Component } from 'react';
import '../styles/Experiencia.css';
import data from '../data/events.json';

class Experiencia extends Component {
  state = {
    events: data
  }

  _getEvents() {
    var key = 0;
    return this.state.events.data.map((event) => {
      key++;
      return <Event key={key} event={event} />
    })
  }

  render() {
    const events = this._getEvents();
    return (
      <div className="Experiencia-details">
        <div className="container">
          <h2>Más sobre mi experiencia</h2>
        </div>
        <div className="Experiencia">
          <div className="container">
          {events}
          </div>
        </div>
      </div>
    );
  }
}

class Event extends Component {
  render() {
    return (
      <article className="event">
        <figure className="event-imageContainer">
          <img className="event-image" src={this.props.event.imgUrl} width="500" alt={this.props.event.title} />
        </figure>
        <div className="event-details">
          <h3 className="event-title">{this.props.event.title}</h3>
          <p className="event-description">{this.props.event.description}</p>
          <a className="event-url" href={this.props.event.url} rel="noopener noreferrer" target="_blank">Ver Más</a>
        </div>
      </article>
    );
  }
}

export default Experiencia;
