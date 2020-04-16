import React from "react";
import { Switch, Route } from "react-router-dom";
import Portfolio from "./Portfolio";

const Page = () => (
  <Switch>
    <Route path="/" exact component={Portfolio} />} />
  </Switch>
);

export default Page;
