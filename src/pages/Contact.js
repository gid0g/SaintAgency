import React from "react";
import aboutBack from "../component/images/aboutBack.jpg";
import Nav from "../component/Segment/Nav";
import Footer from "../component/Segment/Footer";
import Form from "../component/Segment/Form";
function Contact() {
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
            <h1 className="h1s">Contact</h1>
          </div>
          <div className="my-4">
            <Form />
            <div className="row">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
