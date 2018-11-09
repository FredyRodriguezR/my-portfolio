import React, { Component } from 'react';
import '../styles/Portafolio.css';
import data from '../data/projects.json';

class Portafolio extends Component {
  state = {
    projects: data
  }

  _getProjects(){
    var key = 0;
    return this.state.projects.data.map((project) => {
      key++;
      return <Project key={key} project={project}/>
    })
}


  render() {
    const projects = this._getProjects();
    return (
      <div className="Portafolio-details">
        <div className="container">
          <h2>Portafolio (Proyectos Destacados)</h2>
          <div className="Portafolio">
            {projects}
          </div>
        </div>
      </div>
    );
  }
}

class Project extends Component {
  render() {
    return (
      <article className="project">
        <div className="project-details">
          <h3 className="project-title">{this.props.project.title}</h3>
          <h6 className="project-technology">{this.props.project.technology}</h6>
          <p className="project-date"><small><strong>Fecha: </strong>{this.props.project.date}</small></p>
          <p className="project-url"><small><strong>Puedes verlo en: </strong><a target="_blank" href={this.props.project.url}>{this.props.project.url}</a></small></p>
          <p className="project-description">{this.props.project.description}</p>
        </div>
        <figure className="project-imageContainer">
          <img src={this.props.project.imgUrl} className="project-image" alt={this.props.project.title} width="450"></img>
        </figure>
      </article>
    );
  }
}

export default Portafolio;
