import React from "react";
import data from "../Data/portfolio.json";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Project = (props) => {
  const project = data.filter((item) => item.id == props.match.params.id);
  const projectView = project.map((item) => (
    <div className="project">
      <div className="project__gallery">
        {item.gallery.map((it) => {
          let url = `/${item.category_slug}/${it}_640.png`;
          return (
            <div className="project__item">
              <img src={url} alt="" />
            </div>
          );
        })}
      </div>
      <div className="project__description">
        <h2 className="project__title">{item.name}</h2>
        <p className="project__desc-header">Zleceniodawca:</p>
        <p className="project__desc-text"> {item.employer}</p>
        <p className="project__desc-header">Data wykonania:</p>
        <p className="project__desc-text">{item.date}</p>
        <p className="project__desc-header">Opis:</p>
        <p className="project__desc-text"> {item.task}</p>
      </div>
    </div>
  ));
  console.log(data);
  return <>{projectView}</>;
};

export default Project;
