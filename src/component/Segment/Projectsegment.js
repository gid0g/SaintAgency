import React from "react";
import phone from "../images/phone.jpg";
import energy from "../images/energy.jpg";
import seamless from "../images/seamless.jpg";
import stressfree from "../images/stressfree.jpg";
import { Link, useLocation } from "react-router-dom";

function Project({ background }) {
  const linkStyle = {
    textDecoration: "none",
    color: "grey",
  };
  return (
    <>
      <div className={`${background == "white" ? " " : "bg-body-secondary"} `}>
        <div className="max-margin py-3">
          <div className="row mt-4">
            <div className="col-12">
              <h5>
                {" "}
                <span className="text-danger"> ___</span> &nbsp;{" "}
                <span className="text-secondary">Our Project</span>
              </h5>
            </div>
            <div className="col-12">
              <h2 className="">Our Recent work portfolio </h2>
            </div>
            <div className="col-12">
              <h6 className="text-secondary lh-base">
                We take pride in our diverse portfolio of projects that showcase
                our creativity, expertise, and commitment to excellence
              </h6>
            </div>
            {/*  */}
            <div className="row mt-4 d-flex">
              <div
                className={`circular my-3 ${
                  background == "white" ? "col-lg-6" : "col-lg-4"
                } col-6 d-flex flex-column justify-content-center`}
              >
                <Link to="/projectSection" style={linkStyle}>
                  <h6 className="text-secondary">Branding</h6>
                  <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                    <span className="me-auto">
                      Optimization of Energy Management Systems in
                    </span>
                    <button className="me-4 circular-button"></button>
                  </h5>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <img src={energy} className="custom-image2" />
                  </div>
                </Link>
              </div>

              <div
                className={`circular my-3 ${
                  background == "white" ? "col-lg-6" : "col-lg-4"
                } col-6 d-flex flex-column justify-content-center`}
              >
                <Link to="/projectSection" style={linkStyle}>
                  <h6 className="text-secondary">Branding</h6>
                  <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                    <span className="me-auto">
                      Development of a Mobile Application for Mental
                    </span>
                    <button className="me-4 circular-button"></button>
                  </h5>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <img src={phone} className="custom-image2" />
                  </div>
                </Link>
              </div>

              <div
                className={`circular col-6 my-3 ${
                  background == "white"
                    ? "col-lg-6"
                    : "col-lg-4 d-none d-lg-flex"
                }  flex-column justify-content-center`}
              >
                <Link to="/projectSection" style={linkStyle}>
                  <h6 className="text-secondary">Marketing</h6>
                  <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                    <span className="me-auto">
                      Creating a Seamless Online Shopping
                    </span>
                    <button className="me-4 circular-button"></button>
                    <br />
                    &nbsp;
                  </h5>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <img src={seamless} className="custom-image2" />
                  </div>
                </Link>
              </div>
              <div
                className={`circular col-6 my-3 ${
                  background == "white" ? "col-lg-6" : "col-lg-4 d-none"
                }  flex-column justify-content-center`}
              >
                <Link to="/projectSection" style={linkStyle}>
                  <h6 className="text-secondary">LifeStyle</h6>
                  <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                    <span className="me-auto">
                      Creating a Stress-free lifestyle
                    </span>
                    <button className="me-4 circular-button"></button>
                    <br />
                    &nbsp;
                  </h5>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <img src={stressfree} className="custom-image2" />
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`d-flex align-items-center justify-content-center ${
                background == "white" ? "d-none" : ""
              } my-4`}
            >
              <Link to="/project">
                <button className="View">
                  {" "}
                  LEARN MORE <span>&#8599;</span>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="d-none d-lg-block" style={{ height: "2rem" }} />
      </div>
    </>
  );
}

export default Project;
