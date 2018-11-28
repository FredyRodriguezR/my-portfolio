import React, { Component } from 'react';
import '../styles/Portafolio.css';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    data: state.data
  }
}

class Portafolio extends Component {

  /*_getProjects(){
    var key = 0;
    return this.props.data.map((project) => {
      key++;
      var trueKey = project.title + key;
      return <Project key={trueKey} project={project}/>
    })
}*/


  render() {
    //const projects = this._getProjects();
    return (
      <div className="Portafolio-details">
        <div className="container">
          <h2>Portafolio (Proyectos Destacados)</h2>
          <div className="Portafolio">
            { 
              this.props.data.map((project,index) => {
              return <Project key={index} project={project} />
            })}
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
          <p className="project-url"><small><strong>Puedes verlo en: </strong><a target="_blank" rel="noopener noreferrer" href={this.props.project.url}>{this.props.project.url}</a></small></p>
          <p className="project-description">{this.props.project.description}</p>
        </div>
        <figure className="project-imageContainer">
          <CSSTransitionGroup
            transitionName = "flicker"
            transitionEnterTimeout={500}
            transitionLeave={false}
          >
            <img src={this.props.project.imgUrl} 
            className="project-image" alt={this.props.project.title} 
            width="450"
            key = {this.props.project.imgUrl}
            ></img>
          </CSSTransitionGroup>
        </figure>
      </article>
    );
  }
}

export default connect(mapStateToProps)(Portafolio);
