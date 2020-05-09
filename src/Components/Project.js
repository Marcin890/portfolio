import React, { Component } from "react";
import data from "../Data/portfolio.json";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class Project extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  project = data.filter((item) => item.id == this.props.match.params.id);
  images = this.project[0].gallery.map((item) => {
    return `${this.project[0].category_slug}/${item}.png`;
  });
  projectView = this.project.map((item) => (
    <div className="project">
      <div className="project__gallery">
        {item.gallery.map((it, index) => {
          let url = `${item.category_slug}/${it}.png`;
          return (
            <div className="project__item">
              {/* <img src={`portfolio/${url}`} alt="" /> */}
              <img
                src={`${url}`}
                alt=""
                loading="lazy"
                onClick={() =>
                  this.setState({ isOpen: true, photoIndex: index })
                }
              />
            </div>
          );
        })}
      </div>
      <div className="project__description">
        <h2 className="project__title">{item.name}</h2>
        {item.link ? (
          <p className="project__desc-link">
            <a href={item.link} target="_blank" rel="nooreferer">
              Zobacz stronę
            </a>
          </p>
        ) : (
          ""
        )}
        <p className="project__desc-header">Zleceniodawca:</p>
        <p className="project__desc-text"> {item.employer}</p>
        <p className="project__desc-header">Data wykonania:</p>
        <p className="project__desc-text">{item.date}</p>
        <p className="project__desc-header">Opis:</p>
        <p className="project__desc-text"> {item.task}</p>
        {item.technology ? (
          <>
            <p className="project__desc-header">Technologie:</p>
            <p className="project__desc-text">{item.technology}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  ));
  render() {
    const { photoIndex, isOpen } = this.state;
    console.log(this.images);
    console.log(this.project[0].category_slug);
    return (
      <>
        <div>
          {isOpen && (
            <Lightbox
              mainSrc={this.images[photoIndex]}
              nextSrc={this.images[(photoIndex + 1) % this.images.length]}
              prevSrc={
                this.images[
                  (photoIndex + this.images.length - 1) % this.images.length
                ]
              }
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + this.images.length - 1) % this.images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % this.images.length,
                })
              }
            />
          )}
        </div>

        {this.projectView}
      </>
    );
  }
}

export default Project;
