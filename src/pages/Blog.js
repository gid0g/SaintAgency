import React from "react";
import Nav from "../component/Segment/Nav";
import Footer from "../component/Segment/Footer";
import aboutBack from "../component/images/aboutBack.jpg";
import NewsInsight from "../component/Segment/News&Insight";
function Blog() {
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
            <h1 className="h1s">Blog</h1>
          </div>
          <div className="">
            <NewsInsight type="blog" />
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
