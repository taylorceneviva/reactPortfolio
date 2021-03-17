import React, { Component } from "react";
import Projects from "../projects.json";
import ProjectCard from "../components/ProjectCard";

class Project extends Component {
  state = {
    Projects,
  };
  render() {
    return (
      <div>
        {this.state.Projects.map((project) => {
          return (
            <ProjectCard
              name={project.name}
              id={project.id}
              key={project.id}
              image={project.image}
              description={project.description}
              link={project.link}
              github={project.github}
            />
          );
        })}
      </div>
    );
  }
}

export default Project;
