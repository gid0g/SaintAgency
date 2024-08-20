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
            <div className="col-12 d-none d-lg-flex justify-content-center align-items-center">
              <h1 className="me-auto text-light h1ss">
                Join Us in Creating Something Great !
              </h1>

              <Link to="/contact">
                <button className="learn-more-btn  ">
                  {" "}
                  LEARN MORE <span>&#8599;</span>{" "}
                </button>
              </Link>
            </div>
            <div className="col-12 d-flex d-lg-none flex-column justify-content-center ">
              <div className="my-2">
                <h1 className="me-auto text-light h1ss">
                  Join Us in Creating Something Great !
                </h1>
              </div>
              <div className="mt-2">
                <Link to="/contact">
                  <button className="View">
                    {" "}
                    LEARN MORE <span>&#8599;</span>{" "}
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="learn-more-btn  ">
                    {" "}
                    LEARN MORE <span>&#8599;</span>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="p-0 m-0 h-100"
          style={{
            backgroundColor: "#1b3942",
            width: "100%",
            height: "40vh",
            zIndex: -1,
          }}
        >
          <div className="max-margin ">
            <div className="row">
              <div className="col-lg-9 col-6 d-flex align-item-center  text-white fotter">
                <div>
                  <h4 className="">
                    <img src={logo} width="60px" className="me-2" />
                    Saint
                  </h4>
                  <p>
                    Your trusted partner for all things digital let’s transform
                    your online presence
                  </p>
                  <p className="mt-4">+234 705 892 5042</p>
                  <p>Saint.com</p>
                </div>
              </div>
              <div className="col-lg-1 col-3 pt-3 fotter">
                <ul className="navbar-nav mb-2 mb-lg-0 fot">
                  <li className="mb-2">
                    <h5 className="text-secondary text-truncate h5-responsive ">
                      Link{" "}
                    </h5>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <Link to="/" className="type5 " style={linkstyle3}>
                        Home
                      </Link>
                    </h6>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <Link to="/about" className="type5" style={linkstyle3}>
                        About
                      </Link>
                    </h6>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <Link to="/service" className="type5" style={linkstyle3}>
                        Service
                      </Link>
                    </h6>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <Link to="/project" className="type5" style={linkstyle3}>
                        Project
                      </Link>
                    </h6>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <Link to="/blog" className="type5" style={linkstyle3}>
                        Blog
                      </Link>
                    </h6>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-3 pt-3 px-2 fotter">
                <ul className="navbar-nav mb-2 mb-lg-0 fot">
                  <li className="mb-2">
                    <h5 className="text-secondary text-truncate ">
                      Media Social
                    </h5>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <a
                        href="https://www.facebook.com/profile.php?id=100073459971569"
                        className="type5"
                        target="_blank"
                        style={linkstyle3}
                      >
                        Facebook{" "}
                      </a>
                    </h6>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <a
                        href="https://x.com/HeizSaint"
                        className="type5"
                        target="_blank"
                        style={linkstyle3}
                      >
                        Twitter{" "}
                      </a>
                    </h6>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <a
                        href="https://www.linkedin.com/"
                        className="type5"
                        target="_blank"
                        style={linkstyle3}
                      >
                        Linkedn
                      </a>
                    </h6>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <a
                        href="https://www.instagram.com/_gid.og/"
                        className="type5"
                        target="_blank"
                        style={linkstyle3}
                      >
                        Instagram{" "}
                      </a>
                    </h6>
                  </li>
                  <li className="mb-2">
                    <h6 className="text-truncate">
                      <a
                        href="https://www.youtube.com/@gideon8735"
                        className="type5"
                        target="_blank"
                        style={linkstyle3}
                      >
                        Youtube{" "}
                      </a>
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-2">
          <h5 className="text-center text-secondary">
            {" "}
            {year}&copy; All rights Reserved By Saint Technologies
          </h5>
        </div>
      </div>
    </>
  );
}

export default Footer;
