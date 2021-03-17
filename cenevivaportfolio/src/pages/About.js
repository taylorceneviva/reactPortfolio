import React from "react";

function About() {
  return (
    <container>
      <div
        className="card text-center"
        style={{
          width: "900px",
          position: "absolute",
          background: "rgb(206, 190, 186, 0.4)",
        }}
      >
        <div
          className="card-header"
          style={{ fontFamily: "Fjalla One, sans-serif", color:"#A57A72"}}
        >
          <h1>taylorceneviva.design</h1>
        </div>
        <div className="card-body">
          <h2
            className="card-title"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "800", color:"#826C67" }}
          >
            Welcome to my website!
          </h2>
          <p
            className="card-text"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            To get to know me a little, in the past year I graduated during a
            pandemic from Ohio University with a degree in Graphic Design and a
            minor in Marketing. I then decided to enroll in a fullstack web
            development bootcamp through Ohio State University. Once completed I
            hope to start my journey into the world of UX/UI. In the meantime
            ive been doing freelance design for small businesses and
            commissioned illustrations. I'm looking forward to the completion of
            my program and getting started in a professional design space.
          </p>
        </div>
      </div>
      <img
        src="https://github.com/taylorceneviva/reactPortfolio/blob/main/cenevivaportfolio/public/images/me.jpg?raw=true"
        className="card-img"
        alt="Taylor Ceneviva"
        style={{}}
      ></img>
    </container>
  );
}

export default About;
