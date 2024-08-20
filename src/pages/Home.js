import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../component/Segment/Nav";
import Footer from "../component/Segment/Footer";
import About from "../component/Segment/Aboutsegment";
import Experience from "../component/Segment/Experience";
import Projectsegment from "../component/Segment/Projectsegment";
import ServiceSegment from "../component/Segment/ServiceSegment";
import NewsInsight from "../component/Segment/News&Insight";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import earth from "../component/images/earth.gif";
import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import Marquee from "../component/Marquee";
import PP1 from "../component/images/PP1.jpg";
import PP2 from "../component/images/PP2.jpg";
import PP3 from "../component/images/PP3.jpg";
import PP4 from "../component/images/PP4.jpg";

const Home = () => {
  const scrollH = 1500;
  const { scrollY } = useScroll();

  const backgroundSize = useTransform(scrollY, [0, scrollH], ["50%", "200%"]);
  const [activeIndex, setActiveIndex] = useState(0);


  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <>
      <div className="">
        <ParallaxProvider className="">
          <Parallax speed={-20}>
            <motion.div
              className="topper bg-black text-light"
              style={{
                backgroundSize,
                backgroundImage: `url(${earth})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                zIndex: -1,
              }}
            >
              <div className="max-margin topper">
                <Nav />
              </div>
              <div className="container-fluid">
                {/* Parallax Header */}
                <div className="max-margin">
                  <div className="row px-lg-4">
                    <div className="col-12 col-lg-6 text-wrap">
                      <h1 className="h1s">
                        Innovative Web Solutions for Modern Business
                      </h1>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-5 mt-4">
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
                        <button className="learn-more-btn me-4">
                          {" "}
                          LEARN MORE <span>&#8599;</span>{" "}
                        </button>
                        <button className="ms-4 ps-4 circular-button">
                          <span className="ms-4">Consult Saint</span>
                        </button>
                      </div>
                      <div className="col-lg-6 pt-4 col-12 mt-4 d-flex flex-column justify-content-end">
                        {/* Carousel */}
                        <div className="">
                          <Carousel
                            activeIndex={activeIndex}
                            onSelect={handleSelect}
                            interval={5000}
                            controls={false}
                            className="carousel-fade"
                            indicators={false}
                            indicatorClassName="carousel-indicators"
                          >
                            <Carousel.Item className="justify-content-end align-items-stretch p-0">
                              <div className="row d-flex">
                                <div className="col-3 m-0">
                                  <button className="btn btn-lg d-none btn-light p-2">
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
                                  <button className="btn btn-lg d-none btn-light p-2">
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
                                  <button className="btn btn-lg d-none btn-light p-2">
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
                                  <button className="btn btn-lg d-none btn-light p-2">
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
                          <div className="justify-content-end mt-4  align-items-stretch p-0">
                            <div className="row d-flex">
                              <div className="col-3 m-0"></div>
                              <div className="col-9  p-0">
                                <img
                                  src={PP1}
                                  width="48px"
                                  height="43px"
                                  alt="Speaker1"
                                  className={`circle ${
                                    activeIndex == 0 ? "brighten-image" : ""
                                  }`}
                                />
                                <img
                                  src={PP2}
                                  width="48px"
                                  height="43px"
                                  alt="Speaker1"
                                  className={`circle ${
                                    activeIndex == 1 ? "brighten-image" : ""
                                  }`}
                                />
                                <img
                                  src={PP3}
                                  width="48px"
                                  height="43px"
                                  alt="Speaker1"
                                  className={`circle ${
                                    activeIndex == 2 ? "brighten-image" : ""
                                  }`}
                                />
                                <img
                                  src={PP4}
                                  width="48px"
                                  height="43px"
                                  alt="Speaker1"
                                  className={`circle ${
                                    activeIndex == 3 ? "brighten-image" : ""
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
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
            <div className="container-fluid p-0">
              <div className="d-none d-lg-block" style={{ height: "10rem" }} />
              {/* Our Services */}
              <ServiceSegment />
              {/* About Us */}
              <About />
              {/* Our Experience */}
              <Experience />
              {/* Our Project */}
              <Projectsegment />
              {/* News & Insight */}
              <NewsInsight />
              {/* Footer */}
              <Footer />
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>
    </>
  );
};
export default Home;
