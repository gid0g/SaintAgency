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
            <h1 className="h1s">About</h1>
          </div>
          <div className="row " style={{ height: "4rem" }} />
        </div>
        <div className="row">
          <AboutSegment background="white" />
        </div>
        <div className="row">
          <Experience background="grey" />
        </div>
        {/* only main */}
        <div className="container-fluid">
          <div className="row" style={{ height: "8rem" }} />
          <div className="row max-margin">
            <div className="col-lg-3 col-12">
              <h6>
                {" "}
                <span className="text-danger"> ___</span> &nbsp;
                <span className="text-secondary">Team</span>
              </h6>
              <h1 className="">Meets Our Professionals Team</h1>
            </div>
            <div className="col-lg-1 d-none d-lg-block"></div>
            <div className="col-lg-8 col-12">
              <div className="row">
                {" "}
                <div className="col-lg-6 my-3 col-6 d-flex flex-column py-2">
                  <div className="d-flex hover-div">
                    <img
                      src={model1}
                      className="custom-image background-image"
                    />
                    <div className="hidden-paragraph">
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </span>
                    </div>
                    <div className="overlay"></div>
                  </div>
                  <div className="my-2">
                    <h4 className="text-center">Melanie Bella</h4>
                    <h5 className="text-danger text-center">CEO</h5>
                  </div>
                </div>
                <div className="col-lg-6 my-3 col-6 d-flex flex-column py-2">
                  <div className="d-flex hover-div">
                    <img
                      src={model5}
                      className="custom-image background-image"
                    />
                    <div className="hidden-paragraph">
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </span>
                    </div>
                    <div className="overlay"></div>
                  </div>
                  <div className="my-2">
                    <h4 className="text-center">Jhon Miller</h4>
                    <h5 className="text-danger text-center">UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 my-3 col-6 d-flex flex-column py-2">
                  <div className="d-flex hover-div">
                    <img
                      src={model6}
                      className="custom-image background-image"
                    />
                    <div className="hidden-paragraph">
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </span>
                    </div>
                    <div className="overlay"></div>
                  </div>
                  <div className="my-2">
                    <h4 className="text-center">James Anderson</h4>
                    <h5 className="text-danger text-center">Web Developer</h5>
                  </div>
                </div>
                <div className="col-lg-6 my-3 col-6 d-flex flex-column py-2">
                  <div className="d-flex hover-div">
                    <img
                      src={model3}
                      className="custom-image background-image"
                    />
                    <div className="hidden-paragraph">
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </span>
                    </div>
                    <div className="overlay"></div>
                  </div>
                  <div className="my-2">
                    <h4 className="text-center">Emily Johnson</h4>
                    <h5 className="text-danger text-center">UI/UX Designer</h5>
                  </div>
                </div>
                <div className="col-lg-6 my-3 col-6 d-flex flex-column py-2">
                  <div className="d-flex hover-div">
                    <img
                      src={model2}
                      className="custom-image background-image"
                    />
                    <div className="hidden-paragraph">
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </span>
                    </div>
                    <div className="overlay"></div>
                  </div>
                  <div className="my-2">
                    <h4 className="text-center">Sophia Martinez</h4>
                    <h5 className="text-danger text-center">
                      Graphic Designer
                    </h5>
                  </div>
                </div>
                <div className="col-lg-6 my-3 col-6 d-flex flex-column py-2">
                  <div className="d-flex hover-div">
                    <img
                      src={model4}
                      className="custom-image background-image"
                    />
                    <div className="hidden-paragraph">
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                      </span>
                      <span className="mx-2 fs-3 p-1">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </span>
                    </div>
                    <div className="overlay"></div>
                  </div>
                  <div className="my-2">
                    <h4 className="text-center">Michael Thompson</h4>
                    <h5 className="text-danger text-center">
                      Marketing Specialist
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ height: "8rem" }} />
      </div>
      <Footer />
    </>
  );
}

export default About;
