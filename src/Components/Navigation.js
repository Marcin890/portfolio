import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Portfolio",
    path: "/",
  },
  {
    name: "O mnie",
    path: "/about",
  },
  {
    name: "Kontakt",
    path: "/contact",
  },
];

class Navigation extends Component {
  state = {
    isExpanded: false,
  };

  navList = navItems.map((item) => (
    <li className="nav__list-item">
      <NavLink
        activeClassName="active"
        id={item.name}
        to={item.path}
        onClick={() => this.menuClose()}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  menuToggle(e) {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  menuClose(e) {
    this.setState({
      isExpanded: false,
    });
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <nav className={`nav ${isExpanded ? "nav__mobile" : ""}`}>
        <NavLink to="/" onClick={() => this.menuClose()}>
          <h1 className="header__title">
            Marcin <span className="grey">Kośka</span>
          </h1>
        </NavLink>
        <button className="nav__toggle" onClick={() => this.menuToggle()}>
          {!isExpanded ? (
            <img className="nav__toggle-image" src="menu-icon.svg" alt="" />
          ) : (
            <img
              className="nav__toggle-image"
              src="menu-icon-closed.svg"
              alt=""
            />
          )}
        </button>
        <ul
          className={`nav__list--collapsed ${
            isExpanded ? "nav__list--is-expanded" : ""
          }`}
        >
          {this.navList}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
