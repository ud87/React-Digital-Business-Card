import React from "react";

export default function Header() {
  return (
    <header>
      <img className="profile-pic" src="/self.jpg" alt="profile picture" />
      <h1>Udaya Rai</h1>
      <p className="title" aria-label="job title">
        Frontend Developer
      </p>
      <p className="website" aria-label="website name">
        <a href="https://github.com/ud87" target="_blank">
          github.com/ud87
        </a>
      </p>
      <nav>
        <button
          className="btn btn-light"
          onClick={() => (window.location = "mailto:udayarai@hotmail.co.uk")}
        >
          <i className="bi bi-envelope"></i>Email
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/udaya-rai-23aa7337/",
              "_blank"
            )
          }
        >
          <i className="bi bi-linkedin"></i>LinkedIn
        </button>
      </nav>
    </header>
  );
}
