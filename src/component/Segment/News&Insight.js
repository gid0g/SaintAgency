import React from "react";
import { Link, useLocation } from "react-router-dom";
import library from "../images/library.jpg";
import business from "../images/business.jpg";
import Vr from "../images//Vr.jpg";
import typing from "../images//typing.jpg";
import remote from "../images//remote.jpg";
import innovation from "../images//innovation.jpg";

function NewsInsight({ type }) {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <>
      {type === "blog" && (
        <>
          <div className="max-margin mb-4 mb-lg-0">
            <div className="" style={{ height: "4rem" }} />

            <div className="row mt-4 d-flex">
              <div className="text-center col-12 d-flex flex-column">
                <h5>
                  {" "}
                  <span className="text-danger"> ___</span> &nbsp; News &
                  Insight
                </h5>
                <h1 className="h1ss">Trending insights to be in the loop </h1>
                <h6 className="text-secondary lh-base mt-4">
                  In the fast-paced world of digital marketing and technology,
                  staying ahead of the curve is crucial for success. Trending
                  insights provide a valuable glimpse into the latest
                  developments, helping businesses and professionals anticipate
                  changes and adapt their strategies accordingly.
                </h6>
              </div>

              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-grow-1">
                  <img
                    src={business}
                    className="border-radius"
                    style={{
                      width: "100%",
                      height: "30rem",
                      objectFit: "cover",
                    }}
                  />
                </div>{" "}
                <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                  Technology<span className="">Jan 30,2024</span>
                </h6>
                <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                  <span>
                    Mastering Personal Finance: Strategies for Saving,
                    Investing, and Budgeting in Your 20s and 30s{" "}
                  </span>
                  <button className="me-4 circular-button"></button>
                </h5>
              </div>

              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-grow-1">
                  <img
                    src={library}
                    className="border-radius"
                    style={{
                      width: "100%",
                      height: "30rem",
                      objectFit: "cover",
                    }}
                  />
                </div>{" "}
                <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                  Technology<span className="">Feb 25,2023</span>
                </h6>
                <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                  <span>
                    The Ultimate Guide to Sustainable Living: Simple Changes for
                    a Greener Future{" "}
                  </span>
                  <button className="me-4 circular-button"></button>
                </h5>
              </div>
              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-grow-1">
                  <img
                    src={typing}
                    className="border-radius"
                    style={{
                      width: "100%",
                      height: "30rem",
                      objectFit: "cover",
                    }}
                  />
                </div>{" "}
                <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                  Technology<span className="">Jan 7,2024</span>
                </h6>
                <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                  <span>
                    Navigating the Digital Nomad Lifestyle: Tips, Tools, and
                    Tales from the Road{" "}
                  </span>
                  <button className="me-4 circular-button"></button>
                </h5>
              </div>
              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-grow-1">
                  <img
                    src={Vr}
                    className="border-radius"
                    style={{
                      width: "100%",
                      height: "30rem",
                      objectFit: "cover",
                    }}
                  />
                </div>{" "}
                <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                  Technology<span className="">Mar 08,2023</span>
                </h6>
                <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                  <span>
                    Embracing the Remote Work Journey: Insights, Gear, and
                    Stories from Afar
                  </span>
                  <button className="me-4 circular-button"></button>
                </h5>
              </div>
              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-grow-1">
                  <img
                    src={remote}
                    className="border-radius"
                    style={{
                      width: "100%",
                      height: "30rem",
                      objectFit: "cover",
                    }}
                  />
                </div>{" "}
                <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                  Technology<span className="">May 13,2022</span>
                </h6>
                <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                  <span>
                    Embracing the Remote Work Journey: Insights, Gear, and
                    Stories from Afar
                  </span>
                  <button className="me-4 circular-button"></button>
                </h5>
              </div>
              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-grow-1">
                  <img
                    src={innovation}
                    className="border-radius"
                    style={{
                      width: "100%",
                      height: "30rem",
                      objectFit: "cover",
                    }}
                  />
                </div>{" "}
                <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                  Innovation<span className="">Nov 30,2023</span>
                </h6>
                <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                  <span>
                    Exploring the Future of Tech: Innovations, Gadgets, and
                    Expert Insights{" "}
                  </span>
                  <button className="me-4 circular-button"></button>
                </h5>
              </div>
            </div>

            <div className="d-none d-lg-block" style={{ height: "10rem" }} />
          </div>
        </>
      )}
      {type !== "blog" && type !== "business" && (
        <>
          <div className="max-margin mb-4 mb-lg-0">
            <div className="" style={{ height: "4rem" }} />

            <div className="row mt-4 d-flex">
              <div className="col-lg-4 col-12 d-flex flex-column">
                <h5>
                  {" "}
                  <span className="text-danger"> ___</span> &nbsp; News &
                  Insight
                </h5>
                <h1 className="h1ss">Trending insights to be in the loop </h1>
                <h6 className="text-secondary lh-base mt-4">
                  In the fast-paced world of digital marketing and technology,
                  staying ahead of the curve is crucial for success. Trending
                  insights provide a valuable glimpse into the latest
                  developments, helping businesses and professionals anticipate
                  changes and adapt their strategies accordingly.
                </h6>
                <Link to="/blog">
                  <button className="View">
                    {" "}
                    LEARN MORE <span>&#8599;</span>{" "}
                  </button>
                </Link>
              </div>
              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <Link to="/business" style={linkStyle}>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <img
                      src={business}
                      className="border-radius"
                      style={{
                        width: "100%",
                        height: "30rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>{" "}
                  <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                    Technology<span className="">Jan 30,2024</span>
                  </h6>
                  <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                    <span>
                      Mastering Personal Finance: Strategies for Saving,
                      Investing, and Budgeting in Your 20s and 30s{" "}
                    </span>
                    <button className="me-4 circular-button"></button>
                  </h5>
                </Link>
              </div>

              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <Link to="/library" style={linkStyle}>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <img
                      src={library}
                      className="border-radius"
                      style={{
                        width: "100%",
                        height: "30rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>{" "}
                  <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                    Technology<span className="">Feb 25,2023</span>
                  </h6>
                  <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                    <span>
                      The Ultimate Guide to Sustainable Living: Simple Changes
                      for a Greener Future{" "}
                    </span>
                    <button className="me-4 circular-button"></button>
                  </h5>
                </Link>
              </div>
            </div>

            <div className="d-none d-lg-block" style={{ height: "10rem" }} />
          </div>
        </>
      )}
      {type === "business" && (
        <>
          <div className="max-margin mb-4 mb-lg-0">
            <div className="" style={{ height: "4rem" }} />

            <div className="row mt-4 d-flex">
              <div className="col-lg-4 col-12 d-flex flex-column">
                <h5>
                  {" "}
                  <span className="text-danger"> ___</span> &nbsp; News &
                  Insight
                </h5>
                <div className="d-flex h-100 flex-column justify-content-between">
                  <h1 className="h1ss">Latest Related Blog </h1>
                  <Link to="/business">
                    <button className="View">
                      {" "}
                      ALL POST <span>&#8599;</span>{" "}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <Link to="/business" style={linkStyle}>
                  <div className="d-flex align-items-center justify-content-center flex-grow-1">
                    <img
                      src={business}
                      className="border-radius"
                      style={{
                        width: "100%",
                        height: "30rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>{" "}
                  <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                    Technology<span className="">Jan 30,2024</span>
                  </h6>
                  <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                    <span>
                      Mastering Personal Finance: Strategies for Saving,
                      Investing, and Budgeting in Your 20s and 30s{" "}
                    </span>
                    <button className="me-4 circular-button"></button>
                  </h5>
                </Link>
              </div>

              <div className="col-lg-4 circular col-6 my-4 my-lg-0 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-grow-1">
                  <img
                    src={library}
                    className="border-radius"
                    style={{
                      width: "100%",
                      height: "30rem",
                      objectFit: "cover",
                    }}
                  />
                </div>{" "}
                <h6 className="text-secondary mt-3 flex-grow-1 d-flex justify-content-between align-items-center">
                  Technology<span className="">Feb 25,2023</span>
                </h6>
                <h5 className="flex-grow-1 d-flex justify-content-between align-items-center">
                  <span>
                    The Ultimate Guide to Sustainable Living: Simple Changes for
                    a Greener Future{" "}
                  </span>
                  <button className="me-4 circular-button"></button>
                </h5>
              </div>
            </div>

            <div className="d-none d-lg-block" style={{ height: "10rem" }} />
          </div>
        </>
      )}
    </>
  );
}

export default NewsInsight;
