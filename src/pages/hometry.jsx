import React, { useState, useEffect } from "react";
import Nav from "../component/Segment/Nav";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import earth from "./component/images/earth.gif";
import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import Marquee from "../component/Marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import accord1 from "./component/images/accord1.png";
import accord2 from "./component/images/accord2.png";
import accord3 from "./component/images/accord3.png";
import accord4 from "./component/images/accord4.png";
import accord5 from "./component/images/accord5.png";
import team from "./component/images/team2.jpg";
import phone from "./component/images/phone.jpg";
import energy from "./component/images/energy.jpg";
import seamless from "./component/images/seamless.jpg";
import library from "./component/images/library.jpg";
import business from "./component/images/business.jpg";

const Home = () => {
  const scrollH = 1500;
  const { scrollY } = useScroll();

  // const opacity = useTransform(scrollY, [300, scrollH + 500], [1, 0]);

  const backgroundSize = useTransform(scrollY, [0, scrollH], ["50%", "200%"]);
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
      <div className="pt-4 mt-4">
        <ParallaxProvider>
          <Parallax speed={-20}>
            <motion.div
              className="position-relative top-0 left-0 bg-black text-light"
              style={{
                backgroundSize,
                backgroundImage: `url(${earth})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                zIndex: -1,
              }}
            >
              <div className="max-margin">
                <Nav />
              </div>
              <div className=" ">
                <div className="max-margin">
                  <div className="row px-lg-4">
                    <div className="col-6 text-wrap">
                      <h1 className="h1s">
                        Innovative Web Solutions for Modern Business
                      </h1>
                    </div>
                    <div className="row">
                      <div className="col-5 mt-4">
                        <p className="fs-5">
                          We specialize in creating stunning, user-friendly
                          websites that not only look great but also drive
                          business growth. Our team of experienced designers and
                          developers is dedicated to helping you elevate your
                          online presence and connect with your audience in
                          meaningful ways.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-12 mt-4">
                        <button className="learn-more-btn">
                          {" "}
                          LEARN MORE <span>&#8599;</span>{" "}
                        </button>
                      </div>
                      {/* <div className="col-lg-4 d-lg-flex d-none"></div> */}
                      <div className="col-lg-6 col-12 mt-4 d-flex justify-content-end">
                        <div className="">
                          <Carousel
                            interval={5000}
                            controls={false}
                            className="carousel-fade"
                            indicators={false}
                            indicatorClassName="carousel-indicators"
                          >
                            <Carousel.Item className="justify-content-end align-items-stretch p-0">
                              <div className="row d-flex">
                                <div className="col-3 m-0">
                                  <button className="btn btn-lg btn-light p-2">
                                    <h1>01</h1>
                                  </button>
                                </div>
                                <div className="col-9 p-0">
                                  <h5 className="lh-base h-100">
                                    Thanks to Saint company, our website is now
                                    a powerful tool for reaching new customers.
                                    Their expertise in web design and
                                    development is evident in every detail.The
                                    responsive design and seamless functionality
                                    of our new website are exactly what we
                                    needed.
                                  </h5>
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item className="justify-content-end align-items-stretch p-0">
                              <div className="row d-flex">
                                <div className="col-3 m-0">
                                  <button className="btn btn-lg btn-light p-2">
                                    <h1>02</h1>
                                  </button>
                                </div>
                                <div className="col-9 p-0">
                                  <h5 className="lh-base h-100">
                                    Our website has become a potent, wonderful
                                    tool for attracting new customers. Their
                                    proficiency in web design and development
                                    shines through in every aspect. The
                                    responsive design and seamless functionality
                                    of our new website have met our exact needs.
                                  </h5>
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item className="justify-content-end align-items-stretch p-0">
                              <div className="row d-flex">
                                <div className="col-3 m-0">
                                  <button className="btn btn-lg btn-light p-2">
                                    <h1>03</h1>
                                  </button>
                                </div>
                                <div className="col-9 p-0">
                                  <h5 className="lh-base h-100">
                                    Our website has evolved into a powerful
                                    instrument for drawing in new clientele. The
                                    expertise in web design and development is
                                    evident in every facet. The responsive
                                    layout and flawless operation of our new
                                    site have fulfilled our precise
                                    requirements.
                                  </h5>
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item className="justify-content-end align-items-stretch p-0">
                              <div className="row d-flex">
                                <div className="col-3 m-0">
                                  <button className="btn btn-lg btn-light p-2">
                                    <h1>04</h1>
                                  </button>
                                </div>
                                <div className="col-9 p-0">
                                  <h5 className="lh-base h-100">
                                    Our website has transformed into a mighty
                                    tool for attracting new customers. The skill
                                    in web design and development shines through
                                    in every detail. With its responsive design
                                    and seamless functionality, our new site has
                                    met our exacting standards to a tee.
                                  </h5>
                                </div>
                              </div>
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="marquee-container col-12 mt-lg-4 m-0 p-0 pt-lg-4 bg-black">
                    {/* Marquee */}
                    <Marquee />
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Hero */}
            <div className="container-fluid">
              <div className="d-none d-lg-block" style={{ height: "10rem" }} />
              <div className="max-margin">
                <div className="row mt-4">
                  <div className="col-12">
                    <h4>
                      {" "}
                      <span className="text-danger"> ___</span> &nbsp; Our
                      Service
                    </h4>
                  </div>
                  <div className="col-lg-6">
                    <h1 className="h1ss">Get solutions from our service</h1>
                  </div>
                  <div className="col-lg-6">
                    <h5 className="text-secondary lh-base">
                      We offer tailored solutions to meet your unique needs. Our
                      custom web design and development ensure secure, scalable,
                      and engaging websites
                    </h5>
                  </div>
                </div>
                <div className="row my-2 mx-2 d-flex align-items-stretch">
                  {/* Accordion */}
                  <div className="col-6 d-flex flex-column">
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
                            <span className="accordion-number fs-3">01.</span>
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
                            <span className="accordion-number fs-3">01.</span>
                            <span className="fs-3 text-black ms-2">
                              Custom Web Design
                            </span>
                            <span className="accordion-arrow fs-3 text-black ms-auto">
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
                              <li className="h5">
                                Tailored website designs that reflect your
                                brand's identity
                              </li>
                              <li className="h5">
                                Responsive layouts for seamless experience
                                across all services
                              </li>
                              <li className="h5">
                                User-centric design to enhance engagement and
                                conversion
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
                            <span className="accordion-number fs-3">02.</span>
                            <span className="fs-3 text-black ms-2">
                              Web Development
                            </span>
                            <span className="accordion-arrow fs-3 text-black ms-auto">
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
                              <li className="h5">
                                Robust and scalable web development solutions
                              </li>
                              <li className="h5">
                                Integration with the latest technologies and
                                platforms
                              </li>
                              <li className="h5">
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
                            <span className="accordion-number fs-3">03.</span>
                            <span className="fs-3 text-black ms-2">
                              E-commerce Solutions
                            </span>
                            <span className="accordion-arrow fs-3 text-black ms-auto">
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
                              <li className="h5">
                                Comprehensive e-commerce platform development
                              </li>
                              <li className="h5">
                                Optimized product pages and checkout processes
                              </li>
                              <li className="h5">
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
                            <span className="accordion-number fs-3">04.</span>
                            <span className="fs-3 text-black ms-2">
                              SEO & Digital Marketing
                            </span>
                            <span className="accordion-arrow fs-3 text-black ms-auto">
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
                              <li className="h5">
                                On-page and off-page SEO strategies to boost
                                your rankings
                              </li>
                              <li className="h5">
                                Data-driven digital marketing campaigns
                              </li>
                              <li className="h5">
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
                            <span className="accordion-number fs-3">05.</span>
                            <span className="fs-3 text-black ms-2">
                              Branding & Graphic Design
                            </span>
                            <span className="accordion-arrow fs-3 text-black ms-auto">
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
                              <li className="h5">
                                Crafting unique brand identities
                              </li>
                              <li className="h5">
                                Logo design, business cards, and marketing
                                collateral
                              </li>
                              <li className="h5">
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
                  <div className="col-6 d-flex justify-content-center">
                    <div className="col-6 align-items-stretch py-3 positionR custom-image">
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
              </div>
              {/*  */}
              <div className="d-none d-lg-block" style={{ height: "10rem" }} />
              <div className="row">
                {/* cram */}
                <div className="row mt-4 bg-body-secondary">
                  <div className="" style={{ height: "4rem" }} />
                  <div className="max-margin">
                    <div className="row">
                      <div className="col-6 ">
                        <h4>
                          {" "}
                          <span className="text-danger"> ___</span> &nbsp; About
                          Us
                        </h4>
                        <h1 className="h1ss">
                          This is about us providing innovative digital
                          solutions
                        </h1>
                        <h6 className="text-secondary lh-base mt-4">
                          we specialize in creating stunning, user-friendly
                          websites that not only look great but also drive
                          business growth. Our team of experienced designers and
                          developers is dedicated to helping you elevate your
                          online presence and connect with your audience in
                          meaningful ways.
                        </h6>
                        <ul className="checked-list my-3">
                          <li className="h6 lh-base">Experienced Team</li>
                          <li className="h6 lh-base">
                            Client-Centric Approach
                          </li>
                          <li className="h6 lh-base">Innovative Solutions</li>
                          <li className="h6 lh-base">Results-Driven</li>
                        </ul>
                        <button className="View">
                          {" "}
                          LEARN MORE <span>&#8599;</span>{" "}
                        </button>
                      </div>
                      <div className="col-6 d-flex justify-content-center">
                        <div className="col-6 align-items-stretch py-3">
                          <img src={team} className="custom-image2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="" style={{ height: "4rem" }} />
                </div>
              </div>
              <div className="d-none d-lg-block" style={{ height: "10rem" }} />
              <div className="row mt-4 max-margin">
                <div className="" style={{ height: "4rem" }} />
                <div className="row mx-4 d-flex">
                  <div className="col-12 px-lg-4 ">
                    <h4>
                      {" "}
                      <span className="text-danger"> ___</span> &nbsp;
                      Experience
                    </h4>
                    <h1 className="h1ss">Our Experience </h1>
                    <h6 className="text-secondary lh-base mt-4 col-6">
                      With years of collective experience in the digital
                      industry, Glibett brings a wealth of knowledge and
                      expertise to every project we undertake. Our journey in
                      web development, design, and digital marketing has
                      equipped us with the skills needed to navigate the
                      ever-evolving digital landscape.
                    </h6>
                  </div>
                  <div className="row mt-3">
                    <div className="col-4">
                      <div className="card">
                        <div className="card-body text-center">
                          <h1 className="text-danger">Project</h1>
                          <h1>105+</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card">
                        <div className="card-body text-center">
                          <h1 className="text-danger">Employed</h1>
                          <h1>35+</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card">
                        <div className="card-body text-center">
                          <h1 className="text-danger">Client’s</h1>
                          <h1>85+</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="" style={{ height: "10rem" }} />
                </div>
                <div className="" style={{ height: "4rem" }} />
              </div>
              <div className="row mt-4 bg-body-secondary">
                <div className="" style={{ height: "4rem" }} />
                <div className="row d-flex">
                  <div className="row">
                    <div className="col-12 px-lg-4 ">
                      <h5 className="text-secondary">
                        {" "}
                        <span className="text-danger"> ___</span> &nbsp; Our
                        Project
                      </h5>
                      <h1 className="h1ss">Our Recent work portfolio</h1>
                      <h6 className="text-secondary lh-base mt-4">
                        We take pride in our diverse portfolio of projects that
                        showcase our creativity, expertise, and commitment to
                        excellence
                      </h6>
                    </div>
                  </div>

                  <div className="row mt-4 d-flex">
                    <div className="col-4 d-flex flex-column justify-content-center">
                      <h5 className="text-secondary">Branding</h5>
                      <h3 className="flex-grow-1">
                        Optimization of Energy Management Systems in
                      </h3>
                      <div className="d-flex align-items-center justify-content-center flex-grow-1">
                        <img src={energy} className="custom-image2" />
                      </div>
                    </div>

                    <div className="col-4 d-flex flex-column justify-content-center">
                      <h5 className="text-secondary">Branding</h5>
                      <h3 className="flex-grow-1">
                        Development of a Mobile Application for Mental
                      </h3>
                      <div className="d-flex align-items-center justify-content-center flex-grow-1">
                        <img src={phone} className="custom-image2" />
                      </div>
                    </div>

                    <div className="col-4 d-flex flex-column justify-content-center">
                      <h5 className="text-secondary">Marketing</h5>
                      <h3 className="flex-grow-1">
                        Creating a Seamless Online Shopping
                      </h3>
                      <div className="d-flex align-items-center justify-content-center flex-grow-1">
                        <img src={seamless} className="custom-image2" />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center my-4">
                    <button className="View">
                      {" "}
                      LEARN MORE <span>&#8599;</span>{" "}
                    </button>
                  </div>
                  <div className="" style={{ height: "4rem" }} />
                </div>
                <div className="" style={{ height: "4rem" }} />
              </div>
              <div className="row mt-4  px-lg-4">
                <div className="" style={{ height: "4rem" }} />
                <div className="row mx-4 d-flex mt-4">
                  <div className="col-4 px-lg-4 ">
                    <h5>
                      {" "}
                      <span className="text-danger"> ___</span> &nbsp; News &
                      Insight
                    </h5>
                    <h1 className="h1ss">
                      Trending insights to be in the loop{" "}
                    </h1>
                    <h6 className="text-secondary lh-base mt-4">
                      In the fast-paced world of digital marketing and
                      technology, staying ahead of the curve is crucial for
                      success. Trending insights provide a valuable glimpse into
                      the latest developments, helping businesses and
                      professionals anticipate changes and adapt their
                      strategies accordingly.
                    </h6>
                  </div>
                  <div className="col-4 d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-center flex-grow-1">
                      <img
                        src={energy}
                        className="border-radius"
                        style={{
                          width: "100%",
                          height: "30rem",
                          objectFit: "cover",
                        }}
                      />
                    </div>{" "}
                    <h5 className="text-secondary">Branding</h5>
                    <h3 className="flex-grow-1">
                      Optimization of Energy Management Systems in
                    </h3>
                  </div>{" "}
                  <div className="col-4 d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-center flex-grow-1">
                      <img
                        src={energy}
                        className="border-radius"
                        style={{
                          width: "100%",
                          height: "30rem",
                          objectFit: "cover",
                        }}
                      />
                    </div>{" "}
                    <h5 className="text-secondary">Branding</h5>
                    <h3 className="flex-grow-1">
                      Optimization of Energy Management Systems in
                    </h3>
                  </div>
                  <div className="" style={{ height: "10rem" }} />
                </div>
                <div className="" style={{ height: "4rem" }} />
              </div>
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>
    </>
  );
};

export default Home;
