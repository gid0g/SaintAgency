import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

import Ceo1 from "../images/Ceo1.jpg";
import Ceo2 from "../images/ceo2.jpg";
import Ceo3 from "../images/Ceo3.jpg";
import Ceo4 from "../images/Ceo4.jpg";

function Testimonial({ background }) {
  // Testimonial data for better organization
  const testimonials = [
    {
      image: Ceo1,
      name: "Noah Brown",
      title: "Chief Technology Officer (CTO) at Blu Investing Firm",
      rating: 4,
      testimonial:
        "This Saint service has saved our company a significant amount of time and money. The seamless integration with our existing systems made the transition smooth. Moreover, their customer support is incredibly responsive and helpful.",
    },
    {
      image: Ceo2,
      name: "Liam Johnson",
      title: "Senior Product Manager at Incredible's Digitals",
      rating: 5,
      testimonial:
        "This software has revolutionized our workflow efficiency. The user-friendly interface and powerful features have streamlined our processes, reducing manual tasks significantly. The team behind the product is also fantastic—always ready to assist with any questions or issues. We couldn't be happier with our choice!",
    },
    {
      image: Ceo3,
      name: "Emily Thompson",
      title: "Head of Data Science at MyGo",
      rating: 3,
      testimonial:
        "Our team's productivity has soared since we started using this platform. The intuitive design and robust features make it easy to manage tasks and collaborate effectively. What really stands out, though, is the exceptional customer support—always quick to respond and resolve any issues. It's been a game-changer for our business.",
    },
    {
      image: Ceo4,
      name: "Sophia Martinez",
      title: "Director of Software Engineering at Hubris World",
      rating: 5,
      testimonial:
        "Implementing this Saint solution has completely transformed our workflow. The automation features have significantly reduced manual work, allowing our team to focus on strategic initiatives. The platform's user-friendly interface and reliable performance have made a noticeable difference in our daily operations. Plus, their support team is always there when we need them—fast, knowledgeable, and truly helpful.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      if (index < rating) {
        return <FaStar key={index} color="#FFD700" className="star me-1" />;
      } else {
        return <FaRegStar key={index} color="#FFD700" className="star me-1" />;
      }
    });
  };

  const renderTestimonial = (testimonial, index) => (
    <Carousel.Item key={index}>
      <div className="row g-3 g-lg-4">
        {/* Image Section */}
        <div className="col-12 col-md-6 order-2 order-md-1">
          <div className="testimonial-image-container">
            <img
              src={testimonial.image}
              className="d-block w-100"
              alt={`${testimonial.name} testimonial`}
              style={{
                height: "300px",
                minHeight: "250px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 d-flex align-items-center order-1 order-md-2">
          <div className="testimonial-content w-100">
            {/* Star Rating */}
            <div className="mb-3">{renderStars(testimonial.rating)}</div>

            {/* Testimonial Text */}
            <div className="mb-4">
              <p
                className="testimonial-text"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  lineHeight: "1.6",
                  textAlign: "justify",
                }}
              >
                "{testimonial.testimonial}"
              </p>
            </div>

            {/* Author Info */}
            <div className="author-info">
              <h4
                className="author-name mb-1"
                style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}
              >
                {testimonial.name}
              </h4>
              <p
                className="text-secondary mb-0 author-title"
                style={{
                  fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                  fontWeight: "500",
                }}
              >
                {testimonial.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Carousel.Item>
  );

  return (
    <>
      <div
        className={`row ${
          background === "white" ? "" : "bg-body-secondary"
        } m-0`}
      >
        {/* Top Spacing */}
        <div className="row d-none d-lg-block" style={{ height: "6rem" }} />
        <div
          className="row d-none d-md-block d-lg-none"
          style={{ height: "4rem" }}
        />
        <div className="row d-block d-md-none" style={{ height: "2rem" }} />

        {/* Section Header */}
        <div className="col-12 text-center px-3">
          <h5 className="mb-3">
            <span className="text-danger">___</span>&nbsp;
            <span className="text-black">Client's</span>
          </h5>
          <h1
            className="testimonial-heading"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Testimonials that speak to our results
          </h1>
        </div>

        {/* Testimonial Carousel */}
        <div className="col-12 d-flex justify-content-center align-items-center px-2 px-sm-3">
          <div
            className="bg-white my-4 w-100 p-3 p-sm-4 border-radius"
            style={{
              maxWidth: "1200px",
              borderRadius: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Carousel
              interval={7000}
              indicators={true}
              controls={true}
              className="testimonial-carousel"
              keyboard={true}
              touch={true}
              wrap={true}
            >
              {testimonials.map((testimonial, index) =>
                renderTestimonial(testimonial, index)
              )}
            </Carousel>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="row d-none d-lg-block" style={{ height: "9rem" }} />
        <div
          className="row d-none d-md-block d-lg-none"
          style={{ height: "6rem" }}
        />
        <div className="row d-block d-md-none" style={{ height: "3rem" }} />
      </div>


    </>
  );
}

export default Testimonial;
