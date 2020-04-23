import React, { Component } from "react";
import data from "../Data/portfolio.json";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class Portfolio extends Component {
  state = {
    items: data,
    visible: 6,
    filter: "all",
  };

  desktopViewport = window.matchMedia("screen and (min-width:640px)");

  categoryList = [
    { name: "Wszystkie", filter: "all" },
    { name: "Okładki książek", filter: "book-cover" },
    { name: "Ebooki", filter: "ebooks" },
  ];

  changeVieport = () => {
    this.setState({
      visible: 6,
    });
  };

  loadMore = () => {
    this.setState({
      visible: this.state.visible + 6,
      viewport: "",
    });
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  randomImage(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  getPortfolioItems = () => {
    const portfolioItems = this.state.items
      .slice(0, this.state.visible)
      .filter((item) =>
        this.state.filter === "all"
          ? 1
          : item.category_slug === this.state.filter
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((item) => (
        <div className="portfolio__item">
          <div className="portfolio__overlay">
            <p className="portfolio__category">{item.category}</p>
            <h2 className="portfolio__title">{item.name}</h2>
            <Link className="portfolio__btn-view" to={`/projects/${item.id}`}>
              Zobacz
            </Link>
          </div>
          <img
            src={`${item.category_slug}/${
              item.gallery[this.randomImage(0, item.gallery.length - 1)]
            }`}
            alt=""
          />
        </div>
      ));
    return portfolioItems;
  };

  render() {
    this.desktopViewport.addListener(this.changeVieport);
    const portfolioGrid = this.getPortfolioItems();
    return (
      <>
        <select
          id="filter"
          className="portfolio-filter"
          onChange={this.changeFilter}
        >
          {this.categoryList.map((category) => (
            <option value={category.filter}>{category.name}</option>
          ))}
        </select>
        <TransitionGroup>
          <CSSTransition
            appear={true}
            timeout={600}
            classNames="fade"
            key={this.state.filter}
          >
            <div className="portfolio">{portfolioGrid}</div>
          </CSSTransition>
        </TransitionGroup>
        <button onClick={this.loadMore} className="portfolio__btn">
          Więcej
        </button>
      </>
    );
  }
}

export default Portfolio;
