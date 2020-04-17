import React from "react";
import data from "../Data/portfolio.json";
const Project = (props) => {
  const project = data.filter((item) => item.id == props.match.params.id);
  const projectView = project.map((item) => <p>{item.desc}</p>);
  console.log(data);
  return <p>{projectView}</p>;
};

export default Project;
