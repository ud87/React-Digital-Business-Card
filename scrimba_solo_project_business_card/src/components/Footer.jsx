import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="social-media-logo">
        <button
          onClick={() => window.open("https://twitter.com/filthom", "_blank")}
        >
          <i className="bi bi-twitter"></i>
        </button>
        <button
          onClick={() =>
            window.open("https://www.facebook.com/uday.rai.16", "_blank")
          }
        >
          <i className="bi bi-facebook"></i>
        </button>
        <button
          onClick={() =>
            window.open("https://www.instagram.com/uday.rai.16/", "_blank")
          }
        >
          <i className="bi bi-instagram"></i>
        </button>
        <button
          onClick={() => window.open("https://github.com/ud87", "_blank")}
        >
          <i className="bi bi-github"></i>
        </button>
      </div>
    </footer>
  );
}
