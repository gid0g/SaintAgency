import React from "react";

function Experience({ background }) {
  return (
    <>
      <div
        className={`row mt-4 ${
          background == "grey"
            ? "bg-body-secondary max-padding m-0"
            : "max-margin"
        }`}
      >
        <div className="" style={{ height: "4rem" }} />
        <div className="row mx-4 d-flex max-margin">
          <div className="col-12 px-lg-4 ">
            <h5>
              {" "}
              <span className="text-danger"> ___</span> &nbsp; Experience
            </h5>
            <h1 className="">Our Experience </h1>
            <h6 className="text-secondary lh-base mt-4 col-6">
              With years of collective experience in the digital industry, Saint
              brings a wealth of knowledge and expertise to every project we
              undertake. Our journey in web development, design, and digital
              marketing has equipped us with the skills needed to navigate the
              ever-evolving digital landscape.
            </h6>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <div
                className={`card ${
                  background == "grey" ? "bg-transparent" : ""
                }`}
              >
                <div className="card-body text-center">
                  <h1 className="text-danger">Project</h1>
                  <h1>105+</h1>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className={`card ${
                  background == "grey" ? "bg-transparent" : ""
                }`}
              >
                <div className="card-body text-center">
                  <h1 className="text-danger">Employed</h1>
                  <h1>35+</h1>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className={`card ${
                  background == "grey" ? "bg-transparent" : ""
                }`}
              >
                <div className="card-body text-center">
                  <h1 className="text-danger">Client’s</h1>
                  <h1>85+</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block" style={{ height: "10rem" }} />
        </div>
        <div className="" style={{ height: "4rem" }} />
      </div>
    </>
  );
}

export default Experience;
