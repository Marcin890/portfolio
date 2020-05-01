import React from "react";
import { Switch, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import { CSSTransition } from "react-transition-group";

const Page = () => (
  <Switch>
    <Route path="/" exact component={Portfolio} />} />
    <Route path="/about" exact component={About} />} />
    <Route path="/contact" exact component={Contact} />} />
    <Route path="/projects/:id" component={Project} />} />
  </Switch>
);

export default Page;
