import React, { Component } from "react";
import data from "../Data/portfolio.json";
class Portfolio extends Component {
  state = {
    items: data,
    visible: 4,
  };

  desktopViewport = window.matchMedia("screen and (min-width:640px)");

  changeVieport = () => {
    this.setState({
      visible: 6,
    });
  };

  loadMore = () => {
    this.setState({
      visible: this.state.visible + 4,
      viewport: "",
    });
  };

  getPortfolioItems = () => {
    const portfolioItems = this.state.items
      .slice(0, this.state.visible)
      .map((item) => (
        <div className="portfolio__item">
          <img src={item.src} alt="" />
        </div>
      ));
    return portfolioItems;
  };

  render() {
    this.desktopViewport.addListener(this.changeVieport);
    const portfolioGrid = this.getPortfolioItems();
    return (
      <>
        <div className="portfolio">{portfolioGrid}</div>
        <button onClick={this.loadMore} className="portfolio__btn">
          Więcej
        </button>
      </>
    );
  }
}

export default Portfolio;
