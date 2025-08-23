import React from "react";
import aboutBack from "../component/images/aboutBack.jpg";
import Nav from "../component/Segment/Nav";
import Footer from "../component/Segment/Footer";
import Form from "../component/Segment/Form";
import Projectsegment from "../component/Segment/Projectsegment";
import Testimonial from "../component/Segment/Testimnonial";

function Project() {
  return (
    <>
      <div className="container-fluid">
        {/* Navigation Section */}
        <div className="max-margin">
          <Nav text={"black"} />
        </div>

        {/* Navigation spacer - only on desktop */}
        <div className="row d-none d-lg-block" style={{ height: "3.2rem" }} />

        <div className="row">
          {/* Hero Section */}
          <div
            className="p-0 m-0 d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `url(${aboutBack})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "25vh",
              minHeight: "200px",
              zIndex: -1,
            }}
          >
            <h1
              className="h1s text-center px-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Projects
            </h1>
          </div>

          {/* Responsive spacing after hero */}
          <div className="row d-none d-md-block" style={{ height: "4rem" }} />
          <div className="row d-block d-md-none" style={{ height: "2rem" }} />

          {/* Project Segment Section */}
          <div className="row">
            <div className="col-12">
              <Projectsegment background="white" />
            </div>
          </div>

          {/* Responsive spacing after projects */}
          <div className="row d-none d-lg-block" style={{ height: "4rem" }} />
          <div
            className="row d-none d-md-block d-lg-none"
            style={{ height: "3rem" }}
          />
          <div className="row d-block d-md-none" style={{ height: "2rem" }} />
        </div>

        {/* Testimonials Section */}
        <div className="row">
          <div className="col-12">
            <Testimonial />
          </div>
        </div>

        {/* Responsive spacing before form */}
        <div className="row d-none d-lg-block" style={{ height: "9rem" }} />
        <div
          className="row d-none d-md-block d-lg-none"
          style={{ height: "6rem" }}
        />
        <div className="row d-block d-md-none" style={{ height: "3rem" }} />

        {/* Contact Form Section */}
        <div className="row">
          <div className="col-12">
            <Form />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Project;
