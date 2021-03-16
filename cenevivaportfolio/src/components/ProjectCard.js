import React from "react";

function ProjectCard(props) {
  return (
    <div className="card container-fluid" style={{ width: "400px", marginBottom: "20px" }}>
      <img alt={props.name} class="card-img-top" src={props.image} />
      <div class="card-body">
        <h5 className="card-title" style={{fontFamily: "Roboto Slab, serif"}}> {props.name}</h5>
        <p className="card-text" style={{fontFamily:"Montserrat, sans-serif"}}> {props.description}</p>
        <div className="col-12">
          <a
            className="link row"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            Live Link
          </a>
          <a
            className="link row"
            href={props.github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
