import React from "react";
import Nav from "../component/Segment/Nav";
import Footer from "../component/Segment/Footer";
import AboutSegment from "../component/Segment/Aboutsegment";
import Experience from "../component/Segment/Experience";
import aboutBack from "../component/images/aboutBack.jpg";
import model1 from "../component/images/model1.jpg";
import model2 from "../component/images/model2.jpg";
import model3 from "../component/images/model3.jpg";
import model4 from "../component/images/model4.jpg";
import model5 from "../component/images/model5.jpg";
import model6 from "../component/images/model6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faSquareTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  // Team member data for better organization
  const teamMembers = [
    { image: model1, name: "Melanie Bella", role: "CEO" },
    { image: model5, name: "Jhon Miller", role: "UI/UX Designer" },
    { image: model6, name: "James Anderson", role: "Web Developer" },
    { image: model3, name: "Emily Johnson", role: "UI/UX Designer" },
    { image: model2, name: "Sophia Martinez", role: "Graphic Designer" },
    { image: model4, name: "Michael Thompson", role: "Marketing Specialist" },
  ];

  const renderTeamMember = (member, index) => (
    <div key={index} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4">
      <div className="d-flex flex-column h-100">
        <div className="position-relative overflow-hidden rounded">
          <img
            src={member.image}
            alt={member.name}
            className="custom-image background-image w-100"
            style={{
              height: "auto",
              minHeight: "200px",
              objectFit: "cover",
              aspectRatio: "3/4",
            }}
          />
          <div className="hidden-paragraph position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center">
            <span className="mx-1 mx-sm-2 fs-4 fs-sm-3 p-1 text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="mx-1 mx-sm-2 fs-4 fs-sm-3 p-1 text-white">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </span>
            <span className="mx-1 mx-sm-2 fs-4 fs-sm-3 p-1 text-white">
              <FontAwesomeIcon icon={faSquareTwitter} />
            </span>
            <span className="mx-1 mx-sm-2 fs-4 fs-sm-3 p-1 text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </div>
          <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>
        <div className="mt-3 text-center flex-grow-1">
          <h4 className="h5 h-sm-4 mb-1 ">{member.name}</h4>
          <h5 className="h6 h-sm-5 text-danger mb-0">{member.role}</h5>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container-fluid">
        <div className="max-margin">
          <Nav text={"black"} />
        </div>

        {/* Navigation spacer - only on desktop */}
        <div className="row d-none d-lg-block" style={{ height: "3.2rem" }} />

        {/* Hero Section */}
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
              minHeight: "200px",
              zIndex: -1,
            }}
          >
            <h1
              className="h1s text-center px-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              About
            </h1>
          </div>

          {/* Spacer after hero */}
          <div className="row d-none d-md-block" style={{ height: "4rem" }} />
          <div className="row d-block d-md-none" style={{ height: "2rem" }} />
        </div>

        {/* About Segment */}
        <div className="row">
          <AboutSegment background="white" />
        </div>

        {/* Experience Section */}
        <div className="row">
          <Experience background="grey" />
        </div>

        {/* Team Section */}
        <div className="container-fluid">
          {/* Spacer before team section */}
          <div className="row d-none d-lg-block" style={{ height: "8rem" }} />
          <div
            className="row d-none d-md-block d-lg-none"
            style={{ height: "4rem" }}
          />
          <div className="row d-block d-md-none" style={{ height: "2rem" }} />

          <div className="row max-margin">
            {/* Team Section Header */}
            <div className="col-lg-3 col-12 mb-4 mb-lg-0">
              <h6 className="text-center text-lg-start">
                <span className="text-danger">___</span>&nbsp;
                <span className="text-secondary">Team</span>
              </h6>
              <h1
                className="text-center text-lg-start"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
              >
                Meet Our Professional Team
              </h1>
            </div>

            {/* Spacer column for desktop */}
            <div className="col-lg-1 d-none d-lg-block"></div>

            {/* Team Members Grid */}
            <div className="col-lg-8 col-12">
              <div className="row g-3 g-sm-4">
                {teamMembers.map((member, index) =>
                  renderTeamMember(member, index)
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="row d-none d-lg-block" style={{ height: "8rem" }} />
        <div
          className="row d-none d-md-block d-lg-none"
          style={{ height: "4rem" }}
        />
        <div className="row d-block d-md-none" style={{ height: "2rem" }} />
      </div>

      <Footer />
    </>
  );
}

export default About;
