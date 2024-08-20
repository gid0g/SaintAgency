import React from "react";
import Nav from "../component/Segment/Nav";
import aboutBack from "../component/images/aboutBack.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/Segment/Footer";
import ServiceSegment from "../component/Segment/ServiceSegment";
import Testimonial from "../component/Segment/Testimnonial";
function Service() {
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
            <h1 className="h1s">Service</h1>
          </div>
          <div className="row " style={{ height: "4rem" }} />
          <div className="">
            <ServiceSegment type="service" />
            <div className="row " style={{ height: "1rem" }} />
            <div className="max-margin">
              <hr className="bg-secondary" />
            </div>
          </div>
          <div className="">
            <div className="max-margin">
              <div className="row " style={{ height: "6rem" }} />
              <div className="row">
                <div className="col-12 text-center text-secondary">
                  <h4>
                    {" "}
                    <span className="text-danger"> ___</span> &nbsp;FAQ's
                  </h4>
                </div>
                <div className="col-12">
                  {/* Accordion */}
                  <div className="d-flex flex-column">
                    <div
                      className="accordion  w-100"
                      id="accordion1Example"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "37rem",
                        borderRadius: "15px",
                      }}
                    >
                      <div className="accordion-item d-none">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button custom-accordion-button bg-transparent"
                            type="button"
                          >
                            <span className="accordion-number fs-4">01.</span>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body"></div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="accordion1-headingOne"
                        >
                          <button
                            className="accordion-button custom-accordion-button bg-transparent"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion1-collapseOne"
                            aria-expanded="true"
                            aria-controls="accordion1-collapseOne"
                          >
                            <span className="fs-4 text-black ms-2">
                              What services does Saint offer?
                            </span>
                            <span className="accordion-arrow fs-4 text-black ms-auto">
                              <FontAwesomeIcon icon={faArrowCircleRight} />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="accordion1-collapseOne"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordion1Example"
                        >
                          <div className="ms-2 accordion-body text-secondary">
                            <p>
                              The cost of our web design services varies
                              depending on the scope and complexity of the
                              project. We offer customized quotes based on your
                              specific needs and goals. Contact us for a free
                              consultation and quote.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="accordion1-headingTwo"
                        >
                          <button
                            className="accordion-button custom-accordion-button bg-transparent"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion1-collapseTwo"
                            aria-expanded="false"
                            aria-controls="accordion1-collapseTwo"
                          >
                            <span className="fs-4 text-black ms-2">
                              How long does it take to design and develop a
                              website?
                            </span>
                            <span className="accordion-arrow fs-4 text-black ms-auto">
                              <FontAwesomeIcon icon={faArrowCircleRight} />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="accordion1-collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion1Example"
                        >
                          <div className="accordion-body text-secondary">
                            <p>
                              The timeline for designing and developing a
                              website depends on the project's size and
                              complexity. On average, a standard website can
                              take between 4 to 12 weeks from initial
                              consultation to launch. We provide detailed
                              timelines during our project planning phase.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="accordion1-headingThree"
                        >
                          <button
                            className="accordion-button custom-accordion-button bg-transparent"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion1-collapseThree"
                            aria-expanded="false"
                            aria-controls="accordion1-collapseThree"
                          >
                            <span className="fs-4 text-black ms-2">
                              Do you offer website maintenance and support?
                            </span>
                            <span className="accordion-arrow fs-4 text-black ms-auto">
                              <FontAwesomeIcon icon={faArrowCircleRight} />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="accordion1-collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion1Example"
                        >
                          <div className="accordion-body text-secondary">
                            <p>
                              Yes, we offer ongoing website maintenance and
                              support services to ensure your site remains
                              up-to-date, secure, and fully functional. Our
                              maintenance packages can be tailored to meet your
                              specific needs.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="accordion1-headingFour"
                        >
                          <button
                            className="accordion-button custom-accordion-button bg-transparent"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion1-collapseFour"
                            aria-expanded="false"
                            aria-controls="accordion1-collapseFour"
                          >
                            <span className="fs-4 text-black ms-2">
                              Can you help with SEO and digital marketing?
                            </span>
                            <span className="accordion-arrow fs-4 text-black ms-auto">
                              <FontAwesomeIcon icon={faArrowCircleRight} />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="accordion1-collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion1Example"
                        >
                          <div className="accordion-body text-secondary">
                            <p>
                              Absolutely! Our SEO and digital marketing services
                              are designed to increase your online visibility,
                              drive traffic to your site, and boost your search
                              engine rankings. We use proven strategies to help
                              your business grow.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="accordion1-headingFive"
                        >
                          <button
                            className="accordion-button custom-accordion-button bg-transparent"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion1-collapseFive"
                            aria-expanded="false"
                            aria-controls="accordion1-collapseFive"
                          >
                            <span className="fs-4 text-black ms-2">
                              Do you provide custom solutions for e-commerce
                              websites?
                            </span>
                            <span className="accordion-arrow fs-4 text-black ms-auto">
                              <FontAwesomeIcon icon={faArrowCircleRight} />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="accordion1-collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion1Example"
                        >
                          <div className="accordion-body text-secondary">
                            <p>
                              Yes, we specialize in developing custom e-commerce
                              solutions tailored to your business requirements.
                              From user-friendly product pages to secure payment
                              gateways, we ensure a seamless shopping experience
                              for your customers.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="accordion1-headingSix"
                        >
                          <button
                            className="accordion-button custom-accordion-button bg-transparent"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion1-collapseSix"
                            aria-expanded="false"
                            aria-controls="accordion1-collapseSix"
                          >
                            <span className="fs-4 text-black ms-2">
                              How much do your web design services cost?
                            </span>
                            <span className="accordion-arrow fs-4 text-black ms-auto">
                              <FontAwesomeIcon icon={faArrowCircleRight} />
                            </span>
                          </button>
                        </h2>
                        <div
                          id="accordion1-collapseSix"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion1Example"
                        >
                          <div className="accordion-body text-secondary">
                            <p>
                              Yes, we specialize in developing custom e-commerce
                              solutions tailored to your business requirements.
                              From user-friendly product pages to secure payment
                              gateways, we ensure a seamless shopping experience
                              for your customers.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item d-none">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button custom-accordion-button bg-transparent"
                            type="button"
                          />
                        </h2>
                        <div
                          id="accordion1-collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion1Example"
                        >
                          <div className="accordion-body" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row " style={{ height: "2rem" }} />
            <Testimonial background="white" />
            <div className="row " style={{ height: "2rem" }} />
            <div className="row">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
