import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import library from "../images/library.jpg";
import business from "../images/business.jpg";
import Vr from "../images//Vr.jpg";
import typing from "../images//typing.jpg";
import remote from "../images//remote.jpg";
import innovation from "../images//innovation.jpg";

function NewsInsight({ type }) {
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

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    display: "block",
    height: "100%",
  };

  const allArticles = [
    {
      id: 1,
      category: "Technology",
      date: "Jan 30, 2024",
      title:
        "Mastering Personal Finance: Strategies for Saving, Investing, and Budgeting in Your 20s and 30s",
      image: business,
      link: "/business",
      alt: "Business and Finance",
    },
    {
      id: 2,
      category: "Technology",
      date: "Feb 25, 2023",
      title:
        "The Ultimate Guide to Sustainable Living: Simple Changes for a Greener Future",
      image: library,
      link: "/library",
      alt: "Sustainable Living",
    },
    {
      id: 3,
      category: "Technology",
      date: "Jan 7, 2024",
      title:
        "Navigating the Digital Nomad Lifestyle: Tips, Tools, and Tales from the Road",
      image: typing,
      link: "/typing",
      alt: "Digital Nomad",
    },
    {
      id: 4,
      category: "Technology",
      date: "Mar 08, 2023",
      title:
        "Embracing the Remote Work Journey: Insights, Gear, and Stories from Afar",
      image: Vr,
      link: "/vr",
      alt: "Virtual Reality Technology",
    },
    {
      id: 5,
      category: "Technology",
      date: "May 13, 2022",
      title:
        "Embracing the Remote Work Journey: Insights, Gear, and Stories from Afar",
      image: remote,
      link: "/remote",
      alt: "Remote Work",
    },
    {
      id: 6,
      category: "Innovation",
      date: "Nov 30, 2023",
      title:
        "Exploring the Future of Tech: Innovations, Gadgets, and Expert Insights",
      image: innovation,
      link: "/innovation",
      alt: "Tech Innovation",
    },
  ];

  const ArticleCard = ({ article, isClickable = true }) => (
    <div className="col-12 col-md-6 col-lg-4">
      <div
        className="article-card h-100"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          transition: "all 0.3s ease",
          backgroundColor: "#fff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
          }
        }}
      >
        {isClickable ? (
          <Link to={article.link} style={linkStyle}>
            <ArticleContent article={article} />
          </Link>
        ) : (
          <ArticleContent article={article} />
        )}
      </div>
    </div>
  );

  const ArticleContent = ({ article }) => (
    <div className="p-3 p-md-4 h-100 d-flex flex-column">
      {/* Image */}
      <div className="mb-3">
        <div
          className="position-relative overflow-hidden"
          style={{
            borderRadius: "15px",
            height: isMobile ? "200px" : "250px",
          }}
        >
          <img
            src={article.image}
            alt={article.alt}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1)";
              }
            }}
          />

          {/* Category Badge */}
          <div className="position-absolute top-0 start-0 m-3">
            <span
              className="badge rounded-pill px-3 py-2"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "#fff",
                fontSize: "0.8rem",
                fontWeight: "500",
              }}
            >
              {article.category}
            </span>
          </div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted" style={{ fontSize: "0.9rem" }}>
            {article.category}
          </span>
          <span className="text-muted" style={{ fontSize: "0.9rem" }}>
            {article.date}
          </span>
        </div>
      </div>

      {/* Title and Button */}
      <div className="flex-grow-1 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-auto">
          <h5
            className="me-3 mb-0 lh-base flex-grow-1"
            style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: "#333",
              fontWeight: "600",
              lineHeight: "1.4",
            }}
          >
            {article.title}
          </h5>
          <button
            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ms-2"
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #ddd",
              color: "#666",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#333";
              e.target.style.borderColor = "#333";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.borderColor = "#ddd";
              e.target.style.color = "#666";
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>&#8599;</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Blog type - Full grid layout
  if (type === "blog") {
    return (
      <div className="max-margin mb-4 mb-lg-0">
        {/* Top Spacing */}
        <div className="d-none d-md-block" style={{ height: "4rem" }} />
        <div className="d-block d-md-none" style={{ height: "2rem" }} />

        <div className="row mt-3 mt-md-4 px-2 px-md-3 px-lg-4">
          {/* Header */}
          <div className="col-12 text-center mb-4 mb-md-5">
            <h5 className="mb-3">
              <span style={{ color: "#f30c0cff" }}>___</span> &nbsp; News & Insight
            </h5>
            <h1 className="display-5 display-md-4 display-lg-3 mb-4">
              Trending Insights to Be in the Loop
            </h1>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <h6 className="text-secondary lh-base fs-6 fs-md-5">
                  In the fast-paced world of digital marketing and technology,
                  staying ahead of the curve is crucial for success. Trending
                  insights provide a valuable glimpse into the latest
                  developments, helping businesses and professionals anticipate
                  changes and adapt their strategies accordingly.
                </h6>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="col-12">
            <div className="row g-3 g-md-4">
              {allArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="d-none d-lg-block" style={{ height: "8rem" }} />
        <div className="d-block d-lg-none" style={{ height: "3rem" }} />
      </div>
    );
  }

  // Business type - 3 column with header
  if (type === "business") {
    const businessArticles = allArticles.slice(0, 2);

    return (
      <div className="max-margin mb-4 mb-lg-0">
        {/* Top Spacing */}
        <div className="d-none d-md-block" style={{ height: "4rem" }} />
        <div className="d-block d-md-none" style={{ height: "2rem" }} />

        <div className="row mt-3 mt-md-4 px-2 px-md-3 px-lg-4 align-items-stretch">
          {/* Header Column */}
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div>
                <h5 className="mb-3">
                  <span style={{ color: "#666" }}>___</span> &nbsp; News &
                  Insight
                </h5>
                <h1 className="display-6 display-md-5 display-lg-4 mb-4">
                  Latest Related Blog
                </h1>
              </div>
              <div className="mt-auto">
                <Link to="/business" className="text-decoration-none">
                  <button
                    className="btn btn-dark d-inline-flex align-items-center gap-2"
                    style={{
                      padding: isMobile ? "12px 20px" : "15px 25px",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      fontWeight: "600",
                      borderRadius: "8px",
                      backgroundColor: "#333",
                      borderColor: "#333",
                      color: "white",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#555";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#333";
                    }}
                  >
                    ALL POSTS
                    <span className="fs-5">&#8599;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Articles */}
          {businessArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="d-none d-lg-block" style={{ height: "8rem" }} />
        <div className="d-block d-lg-none" style={{ height: "3rem" }} />
      </div>
    );
  }

  // Default type - 3 column with header and CTA
  const defaultArticles = allArticles.slice(0, 2);

  return (
    <div className="max-margin mb-4 mb-lg-0">
      {/* Top Spacing */}
      <div className="d-none d-md-block" style={{ height: "4rem" }} />
      <div className="d-block d-md-none" style={{ height: "2rem" }} />

      <div className="row mt-3 mt-md-4 px-2 px-md-3 px-lg-4 align-items-stretch">
        {/* Header Column */}
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <div className="h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 className="mb-3">
                <span style={{ color: "#fa0c0cff" }}>___</span> &nbsp; News & Insight
              </h5>
              <h1 className="display-6 display-md-5 display-lg-4 mb-4">
                Trending Insights to Be in the Loop
              </h1>
              <h6 className="text-secondary lh-base fs-6 fs-md-5 mb-4">
                In the fast-paced world of digital marketing and technology,
                staying ahead of the curve is crucial for success. Trending
                insights provide a valuable glimpse into the latest
                developments, helping businesses and professionals anticipate
                changes and adapt their strategies accordingly.
              </h6>
            </div>
            <div className="mt-auto">
              <Link to="/blog" className="text-decoration-none">
                <button
                  className="btn btn-outline-dark d-inline-flex align-items-center gap-2"
                  style={{
                    padding: isMobile ? "12px 20px" : "15px 25px",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontWeight: "600",
                    borderRadius: "8px",
                    borderColor: "#333",
                    color: "#333",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#333";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#333";
                  }}
                >
                  LEARN MORE
                  <span className="fs-5">&#8599;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Articles */}
        {defaultArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Bottom Spacing */}
      <div className="d-none d-lg-block" style={{ height: "8rem" }} />
      <div className="d-block d-lg-none" style={{ height: "3rem" }} />
    </div>
  );
}

export default NewsInsight;
