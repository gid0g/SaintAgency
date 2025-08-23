import React, { useState, useEffect } from "react";
import phone from "../images/phone.jpg";
import energy from "../images/energy.jpg";
import seamless from "../images/seamless.jpg";
import stressfree from "../images/stressfree.jpg";
import { Link, useLocation } from "react-router-dom";

function Project({ background }) {
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

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    height: "100%",
  };

  const projects = [
    {
      id: 1,
      category: "Branding",
      title: "Optimization of Energy Management Systems",
      image: energy,
      alt: "Energy Management System",
    },
    {
      id: 2,
      category: "Development",
      title: "Development of a Mobile Application for Mental Health",
      image: phone,
      alt: "Mental Health Mobile App",
    },
    {
      id: 3,
      category: "Marketing",
      title: "Creating a Seamless Online Shopping Experience",
      image: seamless,
      alt: "E-commerce Platform",
    },
    {
      id: 4,
      category: "Lifestyle",
      title: "Creating a Stress-free Lifestyle Platform",
      image: stressfree,
      alt: "Lifestyle Platform",
    },
  ];

  return (
    <>
      <div className={`${background === "white" ? " " : "bg-body-secondary"}`}>
        <div className="max-margin py-3 py-md-4 py-lg-5">
          <div className="row mt-3 mt-md-4 px-2 px-md-3 px-lg-4">
            {/* Header Section */}
            <div className="col-12 mb-4 mb-md-5">
              <h5 className="mb-3">
                <span className="text-danger">___</span> &nbsp;
                <span className="text-secondary">Our Projects</span>
              </h5>
              <h2 className="display-5 display-md-4 display-lg-3 mb-3">
                Our Recent Work Portfolio
              </h2>
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h6 className="text-secondary lh-base fs-6 fs-md-5">
                    We take pride in our diverse portfolio of projects that
                    showcase our creativity, expertise, and commitment to
                    excellence
                  </h6>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="col-12">
              <div className="row g-3 g-md-4">
                {projects.map((project, index) => {
                  // Determine visibility and layout based on background and screen size
                  let colClasses = "col-12 col-md-6";
                  let shouldShow = true;

                  if (background === "white") {
                    colClasses = "col-12 col-md-6 col-lg-6";
                  } else {
                    colClasses = "col-12 col-sm-6 col-lg-4";
                    // Hide last project on mobile for non-white background
                    if (index === 3 && isMobile) {
                      shouldShow = false;
                    }
                  }

                  if (!shouldShow) return null;

                  return (
                    <div key={project.id} className={colClasses}>
                      <div
                        className="project-card h-100"
                        style={{
                          borderRadius: "20px",
                          overflow: "hidden",
                          transition: "all 0.3s ease",
                          border:
                            background === "white"
                              ? "1px solid rgba(0,0,0,0.1)"
                              : "1px solid rgba(255,255,255,0.1)",
                          backgroundColor:
                            background === "white"
                              ? "#fff"
                              : "rgba(255,255,255,0.05)",
                        }}
                        onMouseEnter={(e) => {
                          if (!isMobile) {
                            e.currentTarget.style.transform =
                              "translateY(-8px)";
                            e.currentTarget.style.boxShadow =
                              background === "white"
                                ? "0 15px 40px rgba(0,0,0,0.15)"
                                : "0 15px 40px rgba(255,255,255,0.1)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isMobile) {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                          }
                        }}
                      >
                        <Link to="/projectSection" style={linkStyle}>
                          <div className="p-3 p-md-4 h-100 d-flex flex-column">
                            {/* Category */}
                            <div className="mb-3">
                              <span
                                className="badge rounded-pill px-3 py-2"
                                style={{
                                  backgroundColor: "rgba(220, 53, 69, 0.1)",
                                  color: "#1a0f10ff",
                                  fontSize: "0.8rem",
                                  fontWeight: "500",
                                }}
                              >
                                {project.category}
                              </span>
                            </div>

                            {/* Title and Button */}
                            <div className="mb-3 flex-grow-1">
                              <div className="d-flex justify-content-between align-items-start">
                                <h5
                                  className="me-3 mb-0 lh-base"
                                  style={{
                                    fontSize: isMobile ? "1rem" : "1.1rem",
                                    color:
                                      background === "white" ? "#333" : "#111010ff",
                                    fontWeight: "600",
                                  }}
                                >
                                  {project.title}
                                </h5>
                                <button
                                  className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    border:
                                      background === "white"
                                        ? "1px solid #ddd"
                                        : "1px solid rgba(255,255,255,0.3)",
                                    color:
                                      background === "white" ? "#666" : "#fff",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#272223ff";
                                    e.target.style.borderColor = "#312b2cff";
                                    e.target.style.color = "#fff";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.backgroundColor =
                                      "transparent";
                                    e.target.style.borderColor =
                                      background === "white"
                                        ? "#ddd"
                                        : "rgba(255,255,255,0.3)";
                                    e.target.style.color =
                                      background === "white" ? "#666" : "#fff";
                                  }}
                                >
                                  <span style={{ fontSize: "1.2rem" }}>
                                    &#8599;
                                  </span>
                                </button>
                              </div>
                            </div>

                            {/* Image */}
                            <div className="mt-auto">
                              <div
                                className="position-relative overflow-hidden"
                                style={{
                                  borderRadius: "15px",
                                  height: isMobile ? "200px" : "250px",
                                }}
                              >
                                <img
                                  src={project.image}
                                  alt={project.alt}
                                  className="w-100 h-100"
                                  style={{
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease",
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isMobile) {
                                      e.target.style.transform = "scale(1.05)";
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isMobile) {
                                      e.target.style.transform = "scale(1)";
                                    }
                                  }}
                                />

                                {/* Overlay */}
                                <div
                                  className="position-absolute top-0 start-0 w-100 h-100"
                                  style={{
                                    background:
                                      "linear-gradient(45deg, rgba(220, 53, 69, 0.1), transparent)",
                                    opacity: 0,
                                    transition: "opacity 0.3s ease",
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isMobile) {
                                      e.target.style.opacity = "1";
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isMobile) {
                                      e.target.style.opacity = "0";
                                    }
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action Button */}
            {background !== "white" && (
              <div className="col-12 mt-4 mt-md-5 d-flex justify-content-center">
                <Link to="/project" className="text-decoration-none">
                  <button
                    className="btn btn-primary d-inline-flex align-items-center gap-2"
                    style={{
                      padding: isMobile ? "12px 25px" : "15px 30px",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      fontWeight: "600",
                      borderRadius: "50px",
                      border: "none",
                      background:
                        "linear-gradient(135deg, rgba(10, 7, 7), rgba(0,0,0,0.5))",
                      color: "white",
                      transition: "all 0.3s ease",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 8px 25px rgba(41, 32, 33, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    VIEW ALL PROJECTS
                    <span className="fs-5">&#8599;</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="d-none d-lg-block" style={{ height: "3rem" }} />
        <div className="d-block d-lg-none" style={{ height: "2rem" }} />
      </div>
    </>
  );
}

export default Project;
