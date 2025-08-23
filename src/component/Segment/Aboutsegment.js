import React, { useState, useEffect } from "react";
import team from "../images/team2.jpg";
import { Link, useLocation } from "react-router-dom";

function About({ background }) {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div className={`${background === "white" ? " " : "bg-body-secondary"}`}>
        <div className="max-margin py-3 py-md-4 py-lg-5">
          <div className="row mt-3 mt-md-4 px-2 px-md-3">
            {/* Section Header */}
            <div className="col-12 mb-3 mb-md-4">
              <h5 className="mb-3">
                <span className="text-danger">___</span> &nbsp;
                <span className="text-secondary">About Us</span>
              </h5>
              <h2 className="display-6 display-md-5 display-lg-4 mb-0">
                This is about us providing innovative digital solutions
              </h2>
            </div>

            {/* Content and Image Row */}
            <div className="row align-items-center">
              {/* Text Content */}
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div className="pe-lg-3">
                  <h6 className="text-secondary lh-base fs-6 fs-md-5 mb-4">
                    We specialize in creating stunning, user-friendly websites
                    that not only look great but also drive business growth. Our
                    team of experienced designers and developers is dedicated to
                    helping you elevate your online presence and connect with
                    your audience in meaningful ways.
                  </h6>

                  {/* Features List */}
                  <ul className="checked-list my-3 my-md-4 ps-0">
                    <li className="h6 lh-base mb-2 d-flex align-items-center">
                      <span className="text-success me-2 fs-5">✓</span>
                      Experienced Team
                    </li>
                    <li className="h6 lh-base mb-2 d-flex align-items-center">
                      <span className="text-success me-2 fs-5">✓</span>
                      Client-Centric Approach
                    </li>
                    <li className="h6 lh-base mb-2 d-flex align-items-center">
                      <span className="text-success me-2 fs-5">✓</span>
                      Innovative Solutions
                    </li>
                    <li className="h6 lh-base mb-2 d-flex align-items-center">
                      <span className="text-success me-2 fs-5">✓</span>
                      Results-Driven
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-4">
                    <Link to="/about" className="text-decoration-none">
                      <button
                        className="View btn btn-primary d-inline-flex align-items-center gap-2"
                        style={{
                          padding: isMobile ? "12px 20px" : "15px 25px",
                          fontSize: isMobile ? "0.9rem" : "1rem",
                          fontWeight: "600",
                          borderRadius: "8px",
                          border: "none",
                          background:
                            "linear-gradient(135deg, #050b11ff, #4a4d50ff)",
                          color: "white",
                          transition: "all 0.3s ease",
                        }}

                      >
                        LEARN MORE
                        <span className="fs-5">&#8599;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Spacer */}
              <div className="col-lg-1 d-none d-lg-flex" />

              {/* Image Section */}
              <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                <div
                  className="w-100 position-relative"
                  style={{ maxWidth: "400px" }}
                >
                  <div className="image-container position-relative">
                    <img
                      src={team}
                      alt="Our team working together"
                      className="img-fluid w-100 h-auto shadow-lg"
                      style={{
                        borderRadius: "15px",
                        objectFit: "cover",
                        aspectRatio: isMobile ? "16/12" : "4/5",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.target.style.transform = "scale(1.02)";
                          e.target.style.boxShadow =
                            "0 10px 30px rgba(0,0,0,0.2)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow =
                            "0 4px 15px rgba(0,0,0,0.1)";
                        }
                      }}
                    />

                    {/* Decorative Element */}
                    <div
                      className="position-absolute bg-primary"
                      style={{
                        width: isMobile ? "60px" : "80px",
                        height: isMobile ? "60px" : "80px",
                        borderRadius: "50%",
                        top: isMobile ? "-15px" : "-20px",
                        right: isMobile ? "-15px" : "-20px",
                        zIndex: -1,
                        opacity: 0.1,
                      }}
                    />

                    {/* Another decorative element */}
                    <div
                      className="position-absolute bg-success"
                      style={{
                        width: isMobile ? "40px" : "50px",
                        height: isMobile ? "40px" : "50px",
                        borderRadius: "50%",
                        bottom: isMobile ? "-10px" : "-15px",
                        left: isMobile ? "-10px" : "-15px",
                        zIndex: -1,
                        opacity: 0.15,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="d-none d-lg-block" style={{ height: "3rem" }} />
        <div className="d-block d-lg-none" style={{ height: "2rem" }} />
      </div>
    </>
  );
}

export default About;
