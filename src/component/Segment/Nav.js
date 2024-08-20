import React from "react";
import logo from "../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

import {
  faClockFour,
  faEnvelope,
  faSearch,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
function Nav({ text }) {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "1rem",
  };

  return (
    <>
      <div className=" p-0">
        <div className="row d-none d-lg-block">
          <div className="d-flex align-items-center">
            <h4 className="me-auto">
              <img src={logo} width="60px" className="me-2" />
              Saint
            </h4>

            <span className="me-4">
              {" "}
              <FontAwesomeIcon icon={faClockFour} className="me-1" />
              Mon -Fri: 9:00 AM : 6:00 PM
            </span>
            <span className="">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className="me-1" />
              <a
                href="mailto:gideonogordi@gmail.com"
                className={` ${text == "black" ? "text-black" : "text-white"}`}
                style={linkStyle}
              >
                gideonogordi@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="row  mt-4 mt-lg-0 pt-4 pt-lg-0">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button
                  className="navbar-toggler text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  {text == "black" ? (
                    <span className="navbar-toggler-icon"></span>
                  ) : (
                    <span>
                      <FontAwesomeIcon
                        icon={faToggleOff}
                        className="navbar-toggler-icon text-light"
                      />
                    </span>
                  )}
                </button>
                <div className="d-flex d-lg-none align-items-center">
                  <img src={logo} width="60px" className="me-2" />
                </div>
                <div className={`collapse navbar-collapse`} id="navbarNav">
                  <ul className="navbar-nav me-auto">
                    <li
                      className={`nav-item ${
                        text == "black" ? "text-black" : "text-white"
                      }`}
                    >
                      <Link
                        style={linkStyle}
                        to="/"
                        className={`nav-link me=lg-4 ${
                          text == "black" ? "text-black" : ""
                        }`}
                      >
                        HOME
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        text == "black" ? "text-black" : "text-white"
                      }`}
                    >
                      <Link
                        style={linkStyle}
                        to="/about"
                        className={`nav-link me=lg-4 ${
                          text == "black" ? "text-black" : ""
                        }`}
                      >
                        ABOUT
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        text == "black" ? "text-black" : "text-white"
                      }`}
                    >
                      <Link
                        style={linkStyle}
                        to="/project"
                        className={`nav-link me=lg-4 ${
                          text == "black" ? "text-black" : ""
                        }`}
                      >
                        PROJECT
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        text == "black" ? "text-black" : "text-white"
                      }`}
                    >
                      <Link
                        style={linkStyle}
                        to="/service"
                        className={`nav-link me=lg-4 ${
                          text == "black" ? "text-black" : ""
                        }`}
                      >
                        SERVICE
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        text == "black" ? "text-black" : "text-white"
                      }`}
                    >
                      <Link
                        style={linkStyle}
                        to="/blog"
                        className={`nav-link me=lg-4 ${
                          text == "black" ? "text-black" : ""
                        }`}
                      >
                        BLOG
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        text == "black" ? "text-black" : "text-white"
                      }`}
                    >
                      <Link
                        style={linkStyle}
                        to="/contact"
                        className={`nav-link me=lg-4 ${
                          text == "black" ? "text-black" : ""
                        }`}
                      >
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                  <div className="mb-3 form-control-md">
                    <div className="input-group">
                      <button
                        type="button"
                        className="btn btn-md btn-outline-secondary border-0 bg-body-secondary"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>{" "}
                      <input
                        type="text"
                        className="form-control form-control-md bg-body-secondary"
                        id="Search"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
