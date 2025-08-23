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
  const [isMobile, setIsMobile] = useState(false);

  const backgroundSize = useTransform(scrollY, [0, scrollH], ["50%", "200%"]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <div className="">
        <ParallaxProvider className="">
          <Parallax speed={isMobile ? -5 : -20}>
            <motion.div
              className="topper bg-black text-light"
              style={{
                backgroundSize: isMobile ? "cover" : backgroundSize,
                backgroundImage: `url(${earth})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                zIndex: -1,
                minHeight: isMobile ? "100vh" : "auto",
              }}
            >
              <div className="max-margin topper">
                <Nav />
              </div>
              <div className="container-fluid">
                {/* Parallax Header */}
                <div className="max-margin">
                  <div className="row px-2 px-md-3 px-lg-4">
                    {/* Main Heading - Full width on mobile */}
                    <div className="col-12 text-wrap mb-4 mb-lg-0">
                      <h1 className="h1s display-4 display-md-3 display-lg-2">
                        Innovative Web Solutions for Modern Business
                      </h1>
                    </div>

                    {/* Description */}
                    <div className="row">
                      <div className="col-12 col-md-10 col-lg-5 mt-2 mt-md-3 mt-lg-4">
                        <p className="fs-6 fs-md-5 lh-base">
                          We specialize in creating stunning, user-friendly
                          websites that not only look great but also drive
                          business growth. Our team of experienced designers and
                          developers is dedicated to helping you elevate your
                          online presence and connect with your audience in
                          meaningful ways.
                        </p>
                      </div>
                    </div>

                    {/* Buttons and Testimonial Section */}
                    <div className="row">
                      {/* Buttons - Stack on mobile */}
                      <div className="col-12 col-lg-6 mt-3 mt-lg-4">
                        <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-0">
                          <button className="learn-more-btn flex-sm-auto me-sm-4 mb-3 mb-sm-0">
                            LEARN MORE <span>&#8599;</span>
                          </button>

                        </div>
                      </div>

                      {/* Testimonial Carousel - Better mobile spacing */}
                      <div className="col-12 col-lg-6 mt-4 mt-lg-4 d-flex flex-column justify-content-end">
                        <div className="testimonial-section">
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
                                <div className="col-12 p-0">
                                  <h5 className="lh-base h-100 fs-6 fs-md-5">
                                    Thanks to Saint company, our website is now
                                    a powerful tool for reaching new customers.
                                    Their expertise in web design and
                                    development is evident in every detail. The
                                    responsive design and seamless functionality
                                    of our new website are exactly what we
                                    needed.
                                  </h5>
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item className="justify-content-end align-items-stretch p-0">
                              <div className="row d-flex">
                                <div className="col-12 p-0">
                                  <h5 className="lh-base h-100 fs-6 fs-md-5">
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
                                <div className="col-12 p-0">
                                  <h5 className="lh-base h-100 fs-6 fs-md-5">
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
                                <div className="col-12 p-0">
                                  <h5 className="lh-base h-100 fs-6 fs-md-5">
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

                          {/* Profile Pictures - Better mobile layout */}
                          <div className="justify-content-start justify-md-end mt-3 mt-md-4 align-items-stretch p-0">
                            <div className="row d-flex">
                              <div className="col-12 p-0">
                                <div className="d-flex gap-2 justify-content-start justify-md-end">
                                  <img
                                    src={PP1}
                                    width="40"
                                    height="40"
                                    alt="Speaker1"
                                    className={`circle ${
                                      activeIndex === 0 ? "brighten-image" : ""
                                    }`}
                                    style={{
                                      borderRadius: "50%",
                                      objectFit: "cover",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => setActiveIndex(0)}
                                  />
                                  <img
                                    src={PP2}
                                    width="40"
                                    height="40"
                                    alt="Speaker2"
                                    className={`circle ${
                                      activeIndex === 1 ? "brighten-image" : ""
                                    }`}
                                    style={{
                                      borderRadius: "50%",
                                      objectFit: "cover",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => setActiveIndex(1)}
                                  />
                                  <img
                                    src={PP3}
                                    width="40"
                                    height="40"
                                    alt="Speaker3"
                                    className={`circle ${
                                      activeIndex === 2 ? "brighten-image" : ""
                                    }`}
                                    style={{
                                      borderRadius: "50%",
                                      objectFit: "cover",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => setActiveIndex(2)}
                                  />
                                  <img
                                    src={PP4}
                                    width="40"
                                    height="40"
                                    alt="Speaker4"
                                    className={`circle ${
                                      activeIndex === 3 ? "brighten-image" : ""
                                    }`}
                                    style={{
                                      borderRadius: "50%",
                                      objectFit: "cover",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => setActiveIndex(3)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marquee Section */}
                <div className="row">
                  <div className="marquee-container col-12 mt-3 mt-lg-4 m-0 p-0 pt-3 pt-lg-4 bg-black">
                    <Marquee />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="container-fluid p-0">
              <div className="d-none d-lg-block" style={{ height: "10rem" }} />
              <div className="d-block d-lg-none" style={{ height: "2rem" }} />

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
