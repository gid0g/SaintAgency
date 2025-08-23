import React, { useState, useEffect } from "react";
import Nav from "../component/Segment/Nav";
import Footer from "../component/Segment/Footer";
import library from "../component/images/library.jpg";
import NewsInsight from "../component/Segment/News&Insight";

function Library() {
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
              backgroundImage: `url(${library})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "40vh", // Reduced height for mobile
              minHeight: "300px", // Ensure minimum height
              zIndex: -1,
            }}
          ></div>
          <div className="mt-4">
            <div className="my-4">
              <div className="max-margin row">
                {/* Responsive column layout */}
                <div className="col-lg-2 col-md-1 d-none d-md-block"></div>
                <div className="col-lg-8 col-md-10 col-12 px-3 px-md-0">
                  {/* Mobile-first responsive title */}
                  <h2 className="text-center fs-3 fs-md-2 mb-4">
                    The Ultimate Guide to Sustainable Living: Simple Changes for
                    a Greener Future
                  </h2>

                  {/* Responsive metadata - stack on mobile */}
                  <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center m-4 text-secondary text-center gap-3 gap-sm-5">
                    <span className="small">Category: Environment</span>
                    <span className="small">Written By: Natalie Mc</span>
                  </div>

                  <p className="my-4 text-secondary lead">
                    In today's world, where environmental concerns are
                    increasingly pressing, adopting a sustainable lifestyle has
                    become imperative. Sustainable living involves making
                    choices that reduce our environmental impact, conserve
                    resources, and promote a healthier planet for future
                    generations. Whether you're new to the concept or looking to
                    deepen your commitment to sustainability, this guide offers
                    practical tips and actionable steps to help you live more
                    sustainably every day.
                  </p>

                  <div className="my-4">
                    <div className="my-2">
                      <ul className="list-unstyled">
                        <li className="mb-4">
                          <h3 className="h4 h3-md mb-3">
                            Understanding Sustainable Living
                          </h3>
                          <p className="text-secondary">
                            Sustainable living encompasses a broad range of
                            practices that aim to minimize ecological footprint
                            and enhance environmental stewardship. It involves
                            considering the social, economic, and environmental
                            impacts of our choices and striving to make
                            decisions that support long-term ecological balance.
                          </p>
                        </li>

                        <li className="mb-4">
                          <h3 className="h4 h3-md mb-3">
                            Simple Changes for a Greener Future
                          </h3>
                          <ul className="ps-3 ps-md-4">
                            <li className="mb-3">
                              <b>Reduce, Reuse, Recycle:</b> The classic mantra
                              of sustainability still holds true. Minimize waste
                              by opting for reusable products, recycling
                              materials like plastics, paper, and glass, and
                              composting organic waste to enrich soil.
                            </li>
                            <li className="mb-3">
                              <b>Conserve Water:</b> Install water-saving
                              fixtures such as low-flow showerheads and faucets.
                              Fix leaks promptly, and consider harvesting
                              rainwater for outdoor use.
                            </li>
                            <li className="mb-3">
                              <b>Energy Efficiency:</b> Use energy-efficient
                              appliances and lighting. Turn off lights and
                              electronics when not in use, and consider
                              installing programmable thermostats to optimize
                              heating and cooling.
                            </li>
                            <li className="mb-3">
                              <b>Transportation:</b> Reduce your carbon
                              footprint by walking, biking, carpooling, or using
                              public transportation whenever possible. Consider
                              hybrid or electric vehicles for greater fuel
                              efficiency.
                            </li>
                            <li className="mb-3">
                              <b>Eat Sustainably:</b> Choose locally sourced,
                              organic foods whenever feasible. Reduce meat
                              consumption and support sustainable agriculture
                              practices that prioritize soil health and
                              biodiversity.
                            </li>
                            <li className="mb-3">
                              <b>Grow Your Own:</b> Cultivate a garden or grow
                              herbs indoors to reduce reliance on store-bought
                              produce. Gardening promotes biodiversity and
                              connects you to the natural world.
                            </li>
                            <li className="mb-3">
                              <b>Support Sustainable Products:</b> Opt for
                              eco-friendly products with minimal packaging and
                              certifications such as Fair Trade or Forest
                              Stewardship Council (FSC) for sustainable
                              sourcing.
                            </li>
                            <li className="mb-3">
                              <b>Reduce Energy Consumption:</b> Unplug
                              electronics when not in use, switch to
                              energy-efficient appliances, and consider
                              renewable energy sources like solar panels where
                              feasible.
                            </li>
                          </ul>
                        </li>

                        <li className="mb-4">
                          <h3 className="h4 h3-md mb-3">
                            Building Sustainable Habits
                          </h3>
                          <ul className="ps-3 ps-md-4">
                            <li className="mb-2">
                              <b>Mindful Consumption:</b> Practice mindful
                              shopping by considering the lifecycle of products
                              and opting for durable, quality items over
                              disposable ones.
                            </li>
                            <li className="mb-2">
                              <b>Community Engagement:</b> Get involved in local
                              sustainability initiatives, community gardens, or
                              environmental advocacy groups to amplify your
                              impact and inspire change.
                            </li>
                            <li className="mb-2">
                              <b>Education and Awareness:</b> Stay informed
                              about environmental issues and share knowledge
                              with others. Encourage friends and family to join
                              you in adopting sustainable practices.
                            </li>
                          </ul>
                        </li>

                        <li className="mb-4">
                          <h3 className="h4 h3-md mb-3">
                            Benefits of Sustainable Living
                          </h3>
                          <ul className="ps-3 ps-md-4">
                            <li className="mb-2">
                              <b>Cost Savings:</b> Energy-efficient practices
                              often lead to lower utility bills over time.
                            </li>
                            <li className="mb-2">
                              <b>Healthier Lifestyle:</b> Eating locally
                              sourced, organic foods and reducing exposure to
                              harmful chemicals promotes better health.
                            </li>
                            <li className="mb-2">
                              <b>Sense of Purpose:</b> Contributing to
                              environmental conservation fosters a sense of
                              fulfillment and purpose in making a positive
                              impact.
                            </li>
                          </ul>
                        </li>

                        <li className="mb-4">
                          <h3 className="h4 h3-md mb-3">
                            Overcoming Challenges
                          </h3>
                          <p className="text-secondary">
                            Transitioning to a sustainable lifestyle may pose
                            challenges such as initial costs, convenience, and
                            adjusting habits. Start with small, achievable
                            changes and gradually incorporate more sustainable
                            practices into your daily routine.
                          </p>
                        </li>

                        <li className="mb-4">
                          <h3 className="h4 h3-md mb-3">
                            Inspiring a Greener Future
                          </h3>
                          <p className="text-secondary">
                            By embracing sustainable living, individuals
                            contribute to a collective effort toward a greener
                            future. Each action, no matter how small, has the
                            potential to create meaningful change and inspire
                            others to follow suit.
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div className="conclusion mt-5 p-4 bg-light rounded">
                      <h3 className="h4 h3-md mb-3">Conclusion</h3>
                      <p className="mb-0">
                        Sustainable living is not just about making individual
                        changes—it's about contributing to a global movement
                        toward environmental responsibility and conservation. By
                        implementing these simple yet effective strategies, you
                        can significantly reduce your ecological footprint while
                        often saving money and improving your quality of life.
                        Start with small, manageable changes and gradually
                        expand your sustainable practices. Remember, every
                        action counts, and your commitment to sustainable living
                        can inspire others to join this important cause.
                        Together, we can create a healthier, more sustainable
                        world for current and future generations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-1 d-none d-md-block"></div>
              </div>
            </div>

            {/* News & Insights section */}
            <div className="row">
              <div className="bg-secondary-subtle py-4">
                <NewsInsight type="business" />
              </div>
            </div>

            {/* Footer */}
            <div className="row">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;
