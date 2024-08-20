import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import accord1 from "../images/accord1.png";
import accord2 from "../images/accord2.png";
import accord3 from "../images/accord3.png";
import accord4 from "../images/accord4.png";
import accord5 from "../images/accord5.png";
function ServiceSegment({ type }) {
  const [currentAccord, setCurrentAccord] = useState(1);
  const [currentPic, setCurrentPic] = useState(accord1);
  const [number, setNumber] = useState("01");

  useEffect(() => {
    if (currentAccord == 1) {
      setCurrentPic(accord1);
      setNumber("01");
    } else if (currentAccord == 2) {
      setCurrentPic(accord2);
      setNumber("02");
    } else if (currentAccord == 3) {
      setCurrentPic(accord3);
      setNumber("03");
    } else if (currentAccord == 4) {
      setNumber("04");
      setCurrentPic(accord4);
    } else if (currentAccord == 5) {
      setNumber("05");
      setCurrentPic(accord5);
    }
  }, [currentAccord]);
  return (
    <>
      <div className="max-margin">
        <div
          className={`row mt-4 mb-3 ${
            type == "service" ? "text-center" : "d-none"
          }`}
        >
          <div className="col-12">
            <h5>
              {" "}
              <span className="text-danger"> ___</span> &nbsp; Our Service
            </h5>
            <h2 className="h1ss">Get solutions from our service</h2>

            <h6 className="text-secondary lh-base">
              We offer tailored solutions to meet your unique needs. Our custom
              web design and development ensure secure, scalable, and engaging
              websites
            </h6>
          </div>
        </div>
        <div className={`row mt-4 ${type == "service" ? "d-none" : ""}`}>
          <div className="col-12">
            <h5>
              {" "}
              <span className="text-danger"> ___</span> &nbsp; Our Service
            </h5>
          </div>
          <div className="col-lg-6">
            <h1 className="">Get solutions from our service</h1>
          </div>
          <div className="col-lg-1 d-none d-lg-flex" />

          <div className="col-lg-5">
            <h5 className="text-secondary lh-sm">
              We offer tailored solutions to meet your unique needs. Our custom
              web design and development ensure secure, scalable, and engaging
              websites
            </h5>
          </div>
        </div>
        <div className="row my-2 d-flex align-items-stretch">
          {/* Accordion */}
          <div className="col-lg-6 col-12 d-flex flex-column">
            <div
              className="accordion  w-100"
              id="accordionExample"
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
                <div id="collapseOne" className="accordion-collapse collapse">
                  <div className="accordion-body"></div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(1)}
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className="accordion-number fs-4">01.</span>
                    <span className="fs-4 text-black ms-2">
                      Custom Web Design
                    </span>
                    <span className="accordion-arrow fs-4 text-black ms-auto">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="styled-list mb-3">
                      <li className="h6">
                        Tailored website designs that reflect your brand's
                        identity
                      </li>
                      <li className="h6">
                        Responsive layouts for seamless experience across all
                        services
                      </li>
                      <li className="h6">
                        User-centric design to enhance engagement and conversion
                      </li>
                    </ul>
                    <button className="View">
                      {" "}
                      VIEW DETAILS <span>&#8599;</span>{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(2)}
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span className="accordion-number fs-4">02.</span>
                    <span className="fs-4 text-black ms-2">
                      Web Development
                    </span>
                    <span className="accordion-arrow fs-4 text-black ms-auto">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="styled-list mb-3">
                      <li className="h6">
                        Robust and scalable web development solutions
                      </li>
                      <li className="h6">
                        Integration with the latest technologies and platforms
                      </li>
                      <li className="h6">
                        Ensuring fast, secure, and reliable websites
                      </li>
                    </ul>
                    <button className="View">
                      {" "}
                      VIEW DETAILS <span>&#8599;</span>{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(3)}
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span className="accordion-number fs-4">03.</span>
                    <span className="fs-4 text-black ms-2">
                      E-commerce Solutions
                    </span>
                    <span className="accordion-arrow fs-4 text-black ms-auto">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="styled-list mb-3">
                      <li className="h6">
                        Comprehensive e-commerce platform development
                      </li>
                      <li className="h6">
                        Optimized product pages and checkout processes
                      </li>
                      <li className="h6">
                        Secure payment gateway integrations
                      </li>
                    </ul>
                    <button className="View">
                      {" "}
                      VIEW DETAILS <span>&#8599;</span>{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(4)}
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span className="accordion-number fs-4">04.</span>
                    <span className="fs-4 text-black ms-2">
                      SEO & Digital Marketing
                    </span>
                    <span className="accordion-arrow fs-4 text-black ms-auto">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="styled-list mb-3">
                      <li className="h6">
                        On-page and off-page SEO strategies to boost your
                        rankings
                      </li>
                      <li className="h6">
                        Data-driven digital marketing campaigns
                      </li>
                      <li className="h6">
                        Social media management and content creation
                      </li>
                    </ul>
                    <button className="View">
                      {" "}
                      VIEW DETAILS <span>&#8599;</span>{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(5)}
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span className="accordion-number fs-4">05.</span>
                    <span className="fs-4 text-black ms-2">
                      Branding & Graphic Design
                    </span>
                    <span className="accordion-arrow fs-4 text-black ms-auto">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="styled-list mb-3">
                      <li className="h6">Crafting unique brand identities</li>
                      <li className="h6">
                        Logo design, business cards, and marketing collateral
                      </li>
                      <li className="h6">
                        Visual storytelling to make your brand stand out
                      </li>
                    </ul>
                    <button className="View">
                      {" "}
                      VIEW DETAILS <span>&#8599;</span>{" "}
                    </button>
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
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 d-none d-lg-flex" />

          <div className="col-lg-5 col-12 px-4 px-lg-0 py-2 py-lg-0 d-flex justify-content-center">
            <div className="col-lg-6 col-12 align-items-stretch py-3 positionR custom-image">
              <img
                src={currentPic}
                className="custom-image position-relative"
              />
              <span className="positionA">
                {" "}
                <button className="btn btn-lg btn-dark text-light p-3">
                  <h1>{number}</h1>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block" style={{ height: "10rem" }} />
      </div>
    </>
  );
}

export default ServiceSegment;
