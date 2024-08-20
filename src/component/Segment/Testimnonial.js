import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

import Ceo1 from "../images/Ceo1.jpg";
import Ceo2 from "../images/ceo2.jpg";
import Ceo3 from "../images/Ceo3.jpg";
import Ceo4 from "../images/Ceo4.jpg";
function Testimonial  ({background})  {
  return (
    <>
      <div className={`row ${background=="white"?"":"bg-body-secondary"} m-0 `}>
            <div className="row " style={{ height: "6rem" }} />
            <div className="col-12 text-center">
              <h5>
                {" "}
                <span className="text-danger"> ___</span> &nbsp;{" "}
                <span className="text-black">Client's</span>
              </h5>
              <h1>Testimonials that speaks my result</h1>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="bg-white my-4 max-margin p-4 border-radius">
                {/* Carousel */}
                <Carousel
                  interval={5000}
                  indicators={false}
                //   controls={false}
                  className="border-radius"
                  keyBoardControl={true}
                  autoPlay={true}
                  draggable={true}
                  style={{
                    display: "flex",
                    flexFlow: "flex-row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={Ceo1}
                          className="d-block w-100"
                          alt="Ceo 1"
                          style={{
                            height: "25rem",
                            objectFit: "cover",
                            borderRadius: "15px",
                          }}
                        />
                      </div>
                      <div className="col-6 d-flex  align-items-center">
                        <div className="row">
                          <div className="col-12 my-2">
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaRegStar color="#FFD700" className="star" />
                          </div>
                          <div className="col-12 my-2">
                            <p>
                              "This Saint service has saved our company a
                              significant amount of time and money. The seamless
                              integration with our existing systems made the
                              transition smooth. Moreover. their customer
                              support is incredibly responsive and helpful.
                            </p>
                            <div className="col-12 my-2">
                              <h4>Noah Brown</h4>
                              <p className="text-danger">
                                Chief Technology Officer (CTO) at Blu Investing
                                Firm
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={Ceo2}
                          className="d-block w-100"
                          alt="Ceo 2"
                          style={{
                            height: "25rem",
                            objectFit: "cover",
                            borderRadius: "15px",
                          }}
                        />
                      </div>
                      <div className="col-6 d-flex  align-items-center">
                        <div className="row">
                          <div className="col-12 my-2">
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                          </div>
                          <div className="col-12 my-2">
                            <p>
                              This software has revolutionized our workflow
                              efficiency. The user-friendly interface and
                              powerful features have streamlined our processes,
                              reducing manual tasks significantly. The team
                              behind the product is also fantastic—always ready
                              to assist with any questions or issues. We
                              couldn't be happier with our choice!
                            </p>
                            <div className="col-12 my-2">
                              <h4>Liam Johnson</h4>
                              <p className="text-danger">
                                Senior Product Manager at Incredible's Digitals{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={Ceo3}
                          className="d-block w-100"
                          alt="Ceo 3"
                          style={{
                            height: "25rem",
                            objectFit: "cover",
                            borderRadius: "15px",
                          }}
                        />
                      </div>
                      <div className="col-6 d-flex  align-items-center">
                        <div className="row">
                          <div className="col-12 my-2">
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaRegStar color="#FFD700" className="star" />
                            <FaRegStar color="#FFD700" className="star" />
                          </div>
                          <div className="col-12 my-2">
                            <p>
                              Our team's productivity has soared since we
                              started using this platform. The intuitive design
                              and robust features make it easy to manage tasks
                              and collaborate effectively. What really stands
                              out, though, is the exceptional customer
                              support—always quick to respond and resolve any
                              issues. It's been a game-changer for our business.
                            </p>
                            <div className="col-12 my-2">
                              <h4>Emily Thompson</h4>
                              <p className="text-danger">
                                Head of Data Science at MyGo
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={Ceo4}
                          className="d-block w-100"
                          alt="Ceo 4"
                          style={{
                            height: "25rem",
                            objectFit: "cover",
                            borderRadius: "15px",
                          }}
                        />
                      </div>
                      <div className="col-6 d-flex  align-items-center">
                        <div className="row">
                          <div className="col-12 my-2">
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                            <FaStar color="#FFD700" className="star" />
                          </div>
                          <div className="col-12 my-2">
                            <p>
                              Implementing this Saint solution has completely
                              transformed our workflow. The automation features
                              have significantly reduced manual work, allowing
                              our team to focus on strategic initiatives. The
                              platform's user-friendly interface and reliable
                              performance have made a noticeable difference in
                              our daily operations. Plus, their support team is
                              always there when we need them—fast,
                              knowledgeable, and truly helpful
                            </p>
                            <div className="col-12 my-2">
                              <h4>Sophia Martinez</h4>
                              <p className="text-danger">
                                Director of Software Engineering at Hubris World
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="row " style={{ height: "9rem" }} />
          </div>
    </>
  )
}

export default Testimonial
