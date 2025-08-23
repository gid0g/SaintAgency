import React, { useState, useEffect } from "react";

function Experience({ background }) {
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
      <div className={`${background === "grey" ? "bg-body-secondary" : ""}`}>
        {/* Top Spacing */}
        <div className="d-none d-md-block" style={{ height: "4rem" }} />
        <div className="d-block d-md-none" style={{ height: "2rem" }} />

        <div
          className={`${
            background === "grey" ? "max-padding" : "max-margin"
          } py-3 py-md-4`}
        >
          <div className="row px-2 px-md-3 px-lg-4">
            {/* Header Section */}
            <div className="col-12 mb-4 mb-md-5">
              <h5 className="mb-3">
                <span className="text-danger">___</span> &nbsp; Experience
              </h5>
              <h1 className="display-5 display-md-4 display-lg-3 mb-4">
                Our Experience
              </h1>
              <div className="row">
                <div className="col-12 col-lg-8 col-xl-6">
                  <h6 className="text-secondary lh-base fs-6 fs-md-5">
                    With years of collective experience in the digital industry,
                    Saint brings a wealth of knowledge and expertise to every
                    project we undertake. Our journey in web development,
                    design, and digital marketing has equipped us with the
                    skills needed to navigate the ever-evolving digital
                    landscape.
                  </h6>
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="col-12">
              <div className="row g-3 g-md-4">
                {/* Projects Card */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className={`card h-100 ${
                      background === "grey"
                        ? "bg-transparent border-light"
                        : "shadow-sm"
                    }`}
                    style={{
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                      border:
                        background === "grey"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(0,0,0,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          background === "grey"
                            ? "0 10px 30px rgba(255,255,255,0.1)"
                            : "0 10px 30px rgba(0,0,0,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          background === "grey"
                            ? "none"
                            : "0 2px 10px rgba(0,0,0,0.1)";
                      }
                    }}
                  >
                    <div className="card-body text-center py-4 py-md-5">
                      <h2 className="text-danger mb-2 mb-md-3 display-6 display-md-5">
                        Projects
                      </h2>
                      <h1 className="mb-0 display-4 display-md-3 fw-bold">
                        105+
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Employees Card */}
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className={`card h-100 ${
                      background === "grey"
                        ? "bg-transparent border-light"
                        : "shadow-sm"
                    }`}
                    style={{
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                      border:
                        background === "grey"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(0,0,0,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          background === "grey"
                            ? "0 10px 30px rgba(255,255,255,0.1)"
                            : "0 10px 30px rgba(0,0,0,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          background === "grey"
                            ? "none"
                            : "0 2px 10px rgba(0,0,0,0.1)";
                      }
                    }}
                  >
                    <div className="card-body text-center py-4 py-md-5">
                      <h2 className="text-danger mb-2 mb-md-3 display-6 display-md-5">
                        Employees
                      </h2>
                      <h1 className="mb-0 display-4 display-md-3 fw-bold">
                        35+
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Clients Card */}
                <div className="col-12 col-sm-6 col-lg-4 mx-sm-auto mx-lg-0">
                  <div
                    className={`card h-100 ${
                      background === "grey"
                        ? "bg-transparent border-light"
                        : "shadow-sm"
                    }`}
                    style={{
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                      border:
                        background === "grey"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(0,0,0,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          background === "grey"
                            ? "0 10px 30px rgba(255,255,255,0.1)"
                            : "0 10px 30px rgba(0,0,0,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          background === "grey"
                            ? "none"
                            : "0 2px 10px rgba(0,0,0,0.1)";
                      }
                    }}
                  >
                    <div className="card-body text-center py-4 py-md-5">
                      <h2 className="text-danger mb-2 mb-md-3 display-6 display-md-5">
                        Clients
                      </h2>
                      <h1 className="mb-0 display-4 display-md-3 fw-bold">
                        85+
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="d-none d-lg-block" style={{ height: "8rem" }} />
        <div
          className="d-none d-md-block d-lg-none"
          style={{ height: "4rem" }}
        />
        <div className="d-block d-md-none" style={{ height: "2rem" }} />
      </div>
    </>
  );
}

export default Experience;
