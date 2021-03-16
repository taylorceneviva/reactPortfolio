import React from "react";

function ProjectCard(props) {
  return (
    <div className="card container-fluid" style={{ width: "18rem" }}>
      <img alt={props.name} class="card-img-top" src={props.image} />
      <div class="card-body">
        <h5 className="card-title"> {props.name}</h5>
        <p className="card-text"> {props.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
