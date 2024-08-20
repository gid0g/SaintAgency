import React from "react";
import aboutBack from "../component/images/aboutBack.jpg";
import Nav from "../component/Segment/Nav";
import Footer from "../component/Segment/Footer";
import Form from "../component/Segment/Form";
import Projectsegment from "../component/Segment/Projectsegment";
import Testimonial from "../component/Segment/Testimnonial";
function project() {
  return (
    <>
      <div className="container-fluid">
        <div className="max-margin">
          <Nav text={"black"} />
        </div>
        <div className="row d-none d-lg-block" style={{ height: "3.2rem" }} />
        <div className="row">
          <div
            className="p-0 m-0 d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url(${aboutBack})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "25vh",
              zIndex: -1,
            }}
          >
            <h1 className="h1s">Project</h1>
          </div>
          <div className="row " style={{ height: "4rem" }} />
          {/* Project-Segment */}
          <div className="row">
            <Projectsegment background="white" />
            <div className="row " style={{ height: "4rem" }} />
          </div>
          {/* Testimonials */}
          <Testimonial/>
          <div className="row " style={{ height: "9rem" }} />
          <div className="">
            {/* Form & Address */}
           <Form />
            <div className="row">

            <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default project;
