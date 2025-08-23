import React from "react";
import { Link, useLocation } from "react-router-dom";

import stairs from "../images/stairs.jpg";
import logo from "../images/logo.png";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const linkstyle3 = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
  };

  return (
    <>
      <div
        className="p-0 m-0"
        style={{
          backgroundImage: `url(${stairs})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "40vh",
          zIndex: -1,
        }}
      >
        <div className="max-margin h-100">
          <div className="row h-100">
            {/* Desktop CTA Section */}
            <div className="col-12 d-none d-lg-flex justify-content-center align-items-center">
              <h1 className="me-auto text-light h1ss">
                Join Us in Creating Something Great !
              </h1>
              <Link to="/contact">
                <button className="learn-more-btn">
                  LEARN MORE <span>&#8599;</span>
                </button>
              </Link>
            </div>

            {/* Mobile CTA Section */}
            <div className="col-12 d-flex d-lg-none flex-column justify-content-center align-items-center text-center px-3">
              <div className="mb-3">
                <h1
                  className="text-light h1ss"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
                >
                  Join Us in Creating Something Great !
                </h1>
              </div>
              <div>
                <Link to="/contact">
                  <button className="learn-more-btn">
                    LEARN MORE <span>&#8599;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content Section */}
      <div
        className="p-0 m-0"
        style={{
          backgroundColor: "#1b3942",
          width: "100%",
          minHeight: "40vh",
        }}
      >
        <div className="max-margin py-4">
          <div className="row g-4">
            {/* Company Info Section */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="text-white">
                <h4 className="mb-3">
                  <img
                    src={logo}
                    width="60"
                    className="me-2"
                    alt="Saint Logo"
                  />
                  Saint
                </h4>
                <p className="mb-3" style={{ maxWidth: "400px" }}>
                  Your trusted partner for all things digital let's transform
                  your online presence
                </p>
                <div className="contact-info">
                  <p className="mb-2">
                    <i className="fas fa-phone me-2"></i>
                    +234 705 892 5042
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-globe me-2"></i>
                    Saint.com
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="col-lg-3 col-md-6 col-6">
              <div className="pt-3">
                <h5 className="text-secondary mb-3">Quick Links</h5>
                <ul className="navbar-nav">
                  <li className="mb-3">
                    <Link
                      to="/"
                      className="text-decoration-none"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">Home</h6>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/about"
                      className="text-decoration-none"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">About</h6>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/service"
                      className="text-decoration-none"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">Services</h6>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/project"
                      className="text-decoration-none"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">Projects</h6>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/blog"
                      className="text-decoration-none"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">Blog</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="col-lg-3 col-md-6 col-6">
              <div className="pt-3">
                <h5 className="text-secondary mb-3">Follow Us</h5>
                <ul className="navbar-nav">
                  <li className="mb-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=100073459971569"
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">
                        <i className="fab fa-facebook-f me-2"></i>Facebook
                      </h6>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="https://x.com/HeizSaint"
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">
                        <i className="fab fa-twitter me-2"></i>Twitter
                      </h6>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="https://www.linkedin.com/"
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">
                        <i className="fab fa-linkedin-in me-2"></i>LinkedIn
                      </h6>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="https://www.instagram.com/_gid.og/"
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">
                        <i className="fab fa-instagram me-2"></i>Instagram
                      </h6>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="https://www.youtube.com/@gideon8735"
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkstyle3}
                    >
                      <h6 className="mb-0 text-white">
                        <i className="fab fa-youtube me-2"></i>YouTube
                      </h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black py-3">
        <div className="container-fluid">
          <h6 className="text-center text-secondary mb-0">
            {year} &copy; All rights Reserved By Saint Technologies
          </h6>
        </div>
      </div>
    </>
  );
}

export default Footer;
