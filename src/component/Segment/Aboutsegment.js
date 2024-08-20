import React from 'react'
import team from "../images/team2.jpg";
import { Link, useLocation } from "react-router-dom";

function About  ({background}) {
  return (
    <>
        <div className={`${background=="white"?" ":"bg-body-secondary"} `}>
                <div className="max-margin py-3">
                  <div className="row mt-4">
                    <div className="col-12">
                      <h5>
                        {" "}
                        <span className="text-danger"> ___</span> &nbsp;{" "}
                        <span className="text-secondary"> About Us</span>
                      </h5>
                    </div>
                    <div className="col-12">
                      <h5 className="">
                        This is about us providing innovative digital solutions
                      </h5>
                    </div>
                    <div className="col-lg-6 col-12">
                      <h6 className="text-secondary lh-base">
                        we specialize in creating stunning, user-friendly
                        websites that not only look great but also drive
                        business growth. Our team of experienced designers and
                        developers is dedicated to helping you elevate your
                        online presence and connect with your audience in
                        meaningful ways.
                      </h6>
                      <ul className="checked-list my-3">
                        <li className="h6 lh-base">Experienced Team</li>
                        <li className="h6 lh-base">Client-Centric Approach</li>
                        <li className="h6 lh-base">Innovative Solutions</li>
                        <li className="h6 lh-base">Results-Driven</li>
                      </ul>
                      
                      <Link to="/about">
                      <button className="View">
                        {" "}
                        LEARN MORE <span>&#8599;</span>{" "}
                      </button>
                      </Link>
                    </div>
                    <div className="col-lg-1 d-none d-lg-flex" />
                    <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center">
                      <div className="col-lg-6 col-12 px-4 px-lg-0 py-2 py-lg-0 align-items-stretch py-3 positionR custom-image">
                        <img src={team} className="custom-image2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-none d-lg-block" style={{ height: "2rem" }} />
              </div>
    </>
  )
}

export default About
