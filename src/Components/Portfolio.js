import React, { Component } from "react";
import data from "../Data/portfolio.json";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Select from "react-select";
class Portfolio extends Component {
  state = {
    items: data,
    visible: 6,
    selectedOption: "all",
  };

  desktopViewport = window.matchMedia("screen and (min-width:640px)");

  categoryList = [
    { value: "all", label: "Wszystkie" },
    { value: "book-cover", label: "Okładki książek" },
    { value: "book-layout", label: "Layouty książek" },
    { value: "magazine", label: "Czasopisma" },
    { value: "ad", label: "Reklama" },
    { value: "ebook", label: "Ebooki" },
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

  changeFilter = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  randomImage(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  getPortfolioItems = () => {
    const portfolioItems = this.state.items
      // .sort((a, b) => new Date(b.date) - new Date(a.date))
      .sort((a, b) => b.rating - a.rating)
      .filter((item) =>
        this.state.selectedOption === "all" ||
        this.state.selectedOption.value === "all"
          ? 1
          : item.category_slug === this.state.selectedOption.value
      )
      .slice(0, this.state.visible)
      .map((item) => (
        <div className="portfolio__item">
          <div className="portfolio__inner">
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
        </div>
      ));
    return portfolioItems;
  };

  // colourStyles = {
  //   option: (styles) => ({
  //     marginBottom: "10px",
  //   }),
  // };
  render() {
    this.desktopViewport.addListener(this.changeVieport);
    const portfolioGrid = this.getPortfolioItems();
    const { selectedOption } = this.state;
    return (
      <>
        <div className="portfolio__filter">
          {" "}
          <Select
            value={selectedOption}
            onChange={this.changeFilter}
            options={this.categoryList}
            placeholder="Kategorie"
            styles={this.colourStyles}
          />
        </div>

        <TransitionGroup>
          <CSSTransition
            appear={true}
            timeout={600}
            classNames="fade"
            key={this.state.selectedOption}
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
