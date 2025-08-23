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

  useEffect(() => {
    if (currentAccord === 1) {
      setCurrentPic(accord1);
      setNumber("01");
    } else if (currentAccord === 2) {
      setCurrentPic(accord2);
      setNumber("02");
    } else if (currentAccord === 3) {
      setCurrentPic(accord3);
      setNumber("03");
    } else if (currentAccord === 4) {
      setNumber("04");
      setCurrentPic(accord4);
    } else if (currentAccord === 5) {
      setNumber("05");
      setCurrentPic(accord5);
    }
  }, [currentAccord]);

  return (
    <>
      <div className="max-margin">
        {/* Service Header - Centered Layout */}
        <div
          className={`row mt-3 mt-md-4 mb-3 px-2 px-md-3 ${
            type === "service" ? "text-center" : "d-none"
          }`}
        >
          <div className="col-12">
            <h5 className="mb-3">
              <span className="text-danger">___</span> &nbsp; Our Service
            </h5>
            <h2 className="h1ss display-5 display-md-4 display-lg-3 mb-3">
              Get solutions from our service
            </h2>
            <h6
              className="text-secondary lh-base fs-6 fs-md-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We offer tailored solutions to meet your unique needs. Our custom
              web design and development ensure secure, scalable, and engaging
              websites
            </h6>
          </div>
        </div>

        {/* Service Header - Split Layout */}
        <div
          className={`row mt-3 mt-md-4 px-2 px-md-3 ${
            type === "service" ? "d-none" : ""
          }`}
        >
          <div className="col-12 mb-3">
            <h5>
              <span className="text-danger">___</span> &nbsp; Our Service
            </h5>
          </div>
          <div className="col-12 col-lg-6 mb-3 mb-lg-0">
            <h1 className="display-5 display-md-4 display-lg-3">
              Get solutions from our service
            </h1>
          </div>
          <div className="col-lg-1 d-none d-lg-flex" />
          <div className="col-12 col-lg-5">
            <h5 className="text-secondary lh-base fs-6 fs-md-5">
              We offer tailored solutions to meet your unique needs. Our custom
              web design and development ensure secure, scalable, and engaging
              websites
            </h5>
          </div>
        </div>

        {/* Main Content - Accordion and Image */}
        <div className="row my-3 my-md-4 d-flex align-items-stretch px-2 px-md-3">
          {/* Accordion Section */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div
              className="accordion w-100"
              id="accordionExample"
              style={{
                minHeight: isMobile ? "auto" : "37rem",
                borderRadius: "15px",
              }}
            >
              {/* Hidden spacer item */}
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

              {/* Custom Web Design */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent py-3 py-md-4"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(1)}
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className="accordion-number fs-5 fs-md-4">01.</span>
                    <span className="fs-6 fs-md-4 text-black ms-2 flex-grow-1">
                      Custom Web Design
                    </span>
                    <span className="accordion-arrow fs-5 fs-md-4 text-black">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body px-3 px-md-4">
                    <ul className="styled-list mb-3 ps-3">
                      <li className="h6 mb-2 lh-base">
                        Tailored website designs that reflect your brand's
                        identity
                      </li>
                      <li className="h6 mb-2 lh-base">
                        Responsive layouts for seamless experience across all
                        devices
                      </li>
                      <li className="h6 mb-2 lh-base">
                        User-centric design to enhance engagement and conversion
                      </li>
                    </ul>
                    <button className="View btn btn-outline-dark">
                      VIEW DETAILS <span>&#8599;</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Web Development */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent py-3 py-md-4"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(2)}
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span className="accordion-number fs-5 fs-md-4">02.</span>
                    <span className="fs-6 fs-md-4 text-black ms-2 flex-grow-1">
                      Web Development
                    </span>
                    <span className="accordion-arrow fs-5 fs-md-4 text-black">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body px-3 px-md-4">
                    <ul className="styled-list mb-3 ps-3">
                      <li className="h6 mb-2 lh-base">
                        Robust and scalable web development solutions
                      </li>
                      <li className="h6 mb-2 lh-base">
                        Integration with the latest technologies and platforms
                      </li>
                      <li className="h6 mb-2 lh-base">
                        Ensuring fast, secure, and reliable websites
                      </li>
                    </ul>
                    <button className="View btn btn-outline-dark">
                      VIEW DETAILS <span>&#8599;</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* E-commerce Solutions */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent py-3 py-md-4"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(3)}
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span className="accordion-number fs-5 fs-md-4">03.</span>
                    <span className="fs-6 fs-md-4 text-black ms-2 flex-grow-1">
                      E-commerce Solutions
                    </span>
                    <span className="accordion-arrow fs-5 fs-md-4 text-black">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body px-3 px-md-4">
                    <ul className="styled-list mb-3 ps-3">
                      <li className="h6 mb-2 lh-base">
                        Comprehensive e-commerce platform development
                      </li>
                      <li className="h6 mb-2 lh-base">
                        Optimized product pages and checkout processes
                      </li>
                      <li className="h6 mb-2 lh-base">
                        Secure payment gateway integrations
                      </li>
                    </ul>
                    <button className="View btn btn-outline-dark">
                      VIEW DETAILS <span>&#8599;</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* SEO & Digital Marketing */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent py-3 py-md-4"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(4)}
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span className="accordion-number fs-5 fs-md-4">04.</span>
                    <span className="fs-6 fs-md-4 text-black ms-2 flex-grow-1">
                      SEO & Digital Marketing
                    </span>
                    <span className="accordion-arrow fs-5 fs-md-4 text-black">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body px-3 px-md-4">
                    <ul className="styled-list mb-3 ps-3">
                      <li className="h6 mb-2 lh-base">
                        On-page and off-page SEO strategies to boost your
                        rankings
                      </li>
                      <li className="h6 mb-2 lh-base">
                        Data-driven digital marketing campaigns
                      </li>
                      <li className="h6 mb-2 lh-base">
                        Social media management and content creation
                      </li>
                    </ul>
                    <button className="View btn btn-outline-dark">
                      VIEW DETAILS <span>&#8599;</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Branding & Graphic Design */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button custom-accordion-button bg-transparent py-3 py-md-4"
                    type="button"
                    data-bs-toggle="collapse"
                    onClick={() => setCurrentAccord(5)}
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span className="accordion-number fs-5 fs-md-4">05.</span>
                    <span className="fs-6 fs-md-4 text-black ms-2 flex-grow-1">
                      Branding & Graphic Design
                    </span>
                    <span className="accordion-arrow fs-5 fs-md-4 text-black">
                      <FontAwesomeIcon icon={faArrowCircleRight} />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body px-3 px-md-4">
                    <ul className="styled-list mb-3 ps-3">
                      <li className="h6 mb-2 lh-base">
                        Crafting unique brand identities
                      </li>
                      <li className="h6 mb-2 lh-base">
                        Logo design, business cards, and marketing collateral
                      </li>
                      <li className="h6 mb-2 lh-base">
                        Visual storytelling to make your brand stand out
                      </li>
                    </ul>
                    <button className="View btn btn-outline-dark">
                      VIEW DETAILS <span>&#8599;</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Hidden spacer item */}
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

          {/* Spacer */}
          <div className="col-lg-1 d-none d-lg-flex" />

          {/* Image Section */}
          <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
            <div
              className="position-relative w-100"
              style={{ maxWidth: "400px" }}
            >
              <div className="custom-image-container position-relative">
                <img
                  src={currentPic}
                  alt={`Service ${number}`}
                  className="img-fluid w-100 h-auto"
                  style={{
                    borderRadius: "15px",
                    objectFit: "cover",
                    aspectRatio: isMobile ? "16/12" : "4/5",
                  }}
                />
                <div
                  className="position-absolute"
                  style={{
                    top: isMobile ? "15px" : "20px",
                    right: isMobile ? "15px" : "20px",
                  }}
                >
                  <button
                    className="btn btn-dark text-light d-flex align-items-center justify-content-center"
                    style={{
                      width: isMobile ? "50px" : "70px",
                      height: isMobile ? "50px" : "70px",
                      borderRadius: "50%",
                      fontSize: isMobile ? "1.2rem" : "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {number}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="d-none d-lg-block" style={{ height: "10rem" }} />
        <div className="d-block d-lg-none" style={{ height: "3rem" }} />
      </div>
    </>
  );
}

export default ServiceSegment;
