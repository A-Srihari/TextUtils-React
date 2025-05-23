import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// Types = {   use this or  use bottom part  form line 41 for prop types}
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired
// }

export default function Navbar(props) {
  const myStyles = {
    color: props.mode === "dark" ? "white" : "#282c34",
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${
          props.mode
        } border-bottom border-2 border-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.about}
                </a>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              id="mode-btn"
              className="form-check-label"
              htmlFor="switchCheckDefault"
              style={myStyles}
            >
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center text-align-center">
        Welcome to Text Utils where you can manipulate your text and use them
        for different purpose
      </div>
    </>
  );
}



//^ PropTypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};


// ! Important Note: (Must read)

// * Now this is a simple navbar with a dark theme and a light text color.
// * The navbar has a brand name, a toggle button for mobile view, and three links: Home, Features, and Pricing.
// * The navbar is responsive and will collapse into a toggle button on smaller screens.
// * The text under the navbar is a simple div with a message.
// * You can customize the navbar by changing the brand name, links, and styles as per your requirements.
// * You can also add more features like dropdowns, forms, etc. to the navbar as per your requirements.
// * This navbar is built in bootstrap 5, which is a popular CSS framework for building responsive and mobile-first websites.

// * This navbar can be used in other project as well, just make sure to import the bootstrap CSS and JS files in your project.
// * to use this in other porject just import this component in the app.js file and use it as <Navbar></Navbar>.
// * You can also use this navbar in other projects by copying the code and pasting it in your project.
