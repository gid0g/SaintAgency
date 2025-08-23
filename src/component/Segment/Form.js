import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { name: "Facebook", icon: faFacebookF, url: "https://facebook.com" },
    { name: "Instagram", icon: faInstagram, url: "https://instagram.com" },
    { name: "Twitter", icon: faTwitter, url: "https://twitter.com" },
    { name: "LinkedIn", icon: faLinkedinIn, url: "https://linkedin.com" },
  ];

  return (
    <>
      <div className="row mt-4 max-margin px-2 px-sm-3">
        {/* Section Header */}
        <div className="col-12 mb-4">
          <h5 className="mb-3">
            <span className="text-danger">___</span>&nbsp;Contact
          </h5>
          <h1
            className="h1ss"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Join Us in Creating Something Great
          </h1>
        </div>

        <div className="row g-4">
          {/* Contact Form Section */}
          <div className="col-12 col-lg-7">
            <div className="formSection text-secondary p-3 p-sm-4 border-radius bg-white shadow-sm">
              <h1
                className="mb-4 text-center text-lg-start"
                style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
              >
                Leave a Comment
              </h1>

              <form onSubmit={handleSubmit} className="w-100">
                {/* Name and Email Row */}
                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="name"
                        className="form-control bg-secondary-subtle"
                        id="floatingName"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="floatingName">Name</label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        className="form-control bg-secondary-subtle"
                        id="floatingEmail"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="floatingEmail">Email</label>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="mb-4">
                  <div className="form-floating">
                    <textarea
                      name="message"
                      className="form-control bg-secondary-subtle"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      style={{
                        height: "200px",
                        minHeight: "150px",
                        resize: "vertical",
                      }}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                    <label htmlFor="floatingTextarea">Message</label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-dark text-white w-100 py-3"
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                    fontWeight: "600",
                    borderRadius: "8px",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="col-12 col-lg-5">
            <div className="border-radius bg-secondary-subtle p-3 p-sm-4 h-100">
              {/* Address Section */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-dark me-3"
                    style={{ fontSize: "1.2rem" }}
                  />
                  <h3
                    className="text-secondary mb-0"
                    style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}
                  >
                    Address
                  </h3>
                </div>
                <p
                  className="ms-4 ms-sm-5 lh-base"
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                    color: "#333",
                  }}
                >
                  Plot 23-24, Darrow Road, Valley Industrial Estate, Lagos,
                  Nigeria
                </p>
              </div>

              {/* Phone Section */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-dark me-3"
                    style={{ fontSize: "1.2rem" }}
                  />
                  <h3
                    className="text-secondary mb-0"
                    style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}
                  >
                    Phone
                  </h3>
                </div>
                <p
                  className="ms-4 ms-sm-5 mb-0"
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                    color: "#333",
                  }}
                >
                  <a
                    href="tel:+2347058925042"
                    className="text-decoration-none text-dark"
                  >
                    +234 705 892 5042
                  </a>
                </p>
              </div>

              {/* Email Section */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-dark me-3"
                    style={{ fontSize: "1.2rem" }}
                  />
                  <h3
                    className="text-secondary mb-0"
                    style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}
                  >
                    Email
                  </h3>
                </div>
                <p
                  className="ms-4 ms-sm-5 mb-0"
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                    color: "#333",
                  }}
                >
                  <a
                    href="mailto:info@saint.com"
                    className="text-decoration-none text-dark"
                  >
                    info@saint.com
                  </a>
                </p>
              </div>

              {/* Social Media Section */}
              <div>
                <h3
                  className="text-secondary mb-3"
                  style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}
                >
                  Follow Us
                </h3>
                <div className="row g-2">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="col-6 col-sm-3 col-lg-6">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center text-decoration-none text-dark p-2 rounded hover-link"
                        style={{
                          transition: "all 0.3s ease",
                          fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={social.icon}
                          className="text-dark me-2"
                          style={{ fontSize: "1rem" }}
                        />
                        {social.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="row d-none d-lg-block" style={{ height: "7rem" }} />
        <div
          className="row d-none d-md-block d-lg-none"
          style={{ height: "4rem" }}
        />
        <div className="row d-block d-md-none" style={{ height: "2rem" }} />
      </div>


    </>
  );
}

export default Form;
