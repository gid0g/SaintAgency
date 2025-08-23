import React, { useState, useEffect } from "react";
import Nav from "../component/Segment/Nav";
import Footer from "../component/Segment/Footer";
import business from "../component/images/business.jpg";
import NewsInsight from "../component/Segment/News&Insight";

function Business() {
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
              backgroundImage: `url(${business})`,
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
                    Mastering Personal Finance: Strategies for Saving,
                    Investing, and Budgeting in Your 20s and 30s
                  </h2>

                  {/* Responsive metadata - stack on mobile */}
                  <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center m-4 text-secondary text-center gap-3 gap-sm-5">
                    <span className="small">Category: Technology</span>
                    <span className="small">Written By: Natalie Mc</span>
                  </div>

                  <p className="my-4 text-secondary lead">
                    Managing personal finances effectively is a cornerstone of
                    financial stability and future success. In your 20s and 30s,
                    establishing smart financial habits can lay the groundwork
                    for achieving long-term financial goals, whether it's buying
                    a home, starting a business, or retiring comfortably. This
                    guide provides essential strategies for saving, investing,
                    and budgeting during these formative years to help you build
                    a strong financial foundation.
                  </p>

                  <div className="my-4">
                    <ol className="ps-3 ps-md-4">
                      <li className="big-li mb-4">
                        <h3 className="h4 h3-md mb-3">
                          Understanding Your Financial Situation
                        </h3>
                        <p className="text-secondary mb-3">
                          Begin by assessing your current financial situation:
                        </p>
                        <ul className="dot ps-3">
                          <li className="mb-2">
                            <b>Income and Expenses:</b> Calculate your monthly
                            income after taxes and fixed expenses (rent,
                            utilities, loans). Track discretionary spending to
                            identify areas where you can cut back.
                          </li>
                          <li className="mb-2">
                            <b>Debts:</b> Determine your outstanding debts
                            (student loans, credit cards) and create a plan to
                            pay them off strategically.
                          </li>
                        </ul>
                      </li>

                      <li className="big-li mb-4">
                        <h3 className="h4 h3-md mb-3">Creating a Budget</h3>
                        <p className="text-secondary mb-3">
                          Developing a budget is crucial for managing cash flow
                          and achieving financial goals:
                        </p>
                        <ul className="dot ps-3">
                          <li className="mb-2">
                            <b>Fixed vs. Variable Expenses:</b> Differentiate
                            between essential (rent, groceries) and
                            non-essential expenses (entertainment, dining out).
                            Allocate a portion of income towards savings and
                            investments.
                          </li>
                          <li className="mb-2">
                            <b>Emergency Fund:</b> Build an emergency fund
                            equivalent to 3-6 months' worth of living expenses
                            to cover unforeseen circumstances like job loss or
                            medical emergencies.
                          </li>
                        </ul>
                      </li>

                      <li className="big-li mb-4">
                        <h3 className="h4 h3-md mb-3">Saving Strategically</h3>
                        <p className="text-secondary mb-3">
                          Saving money early in your career sets the stage for
                          financial security:
                        </p>
                        <ul className="dot ps-3">
                          <li className="mb-2">
                            <b>Automate Savings:</b> Set up automatic transfers
                            to a high-yield savings account or retirement fund.
                            Treat savings as a non-negotiable expense.
                          </li>
                          <li className="mb-2">
                            <b>Save for Goals:</b> Allocate savings towards
                            short-term goals (travel, down payment) and
                            long-term goals (retirement, children's education)
                            based on priority.
                          </li>
                        </ul>
                      </li>

                      <li className="big-li mb-4">
                        <h3 className="h4 h3-md mb-3">
                          Investing for the Future
                        </h3>
                        <p className="text-secondary mb-3">
                          Investing allows your money to grow over time and
                          combat inflation:
                        </p>
                        <ul className="dot ps-3">
                          <li className="mb-2">
                            <b>Start Early:</b> Take advantage of compound
                            interest by investing early. Consider diversified
                            investments such as stocks, bonds, and index funds
                            based on risk tolerance.
                          </li>
                          <li className="mb-2">
                            <b>Retirement Accounts:</b> Maximize contributions
                            to employer-sponsored retirement plans (401(k), IRA)
                            and take advantage of employer matching
                            contributions.
                          </li>
                        </ul>
                      </li>

                      <li className="big-li mb-4">
                        <h3 className="h4 h3-md mb-3">
                          Managing Debt Effectively
                        </h3>
                        <p className="text-secondary mb-3">
                          Strategically manage and reduce debt to improve
                          financial health:
                        </p>
                        <ul className="dot ps-3">
                          <li className="mb-2">
                            <b>Debt Repayment Strategy:</b> Prioritize
                            high-interest debts first (credit cards) while
                            maintaining minimum payments on other loans.
                            Consider consolidating or refinancing debts for
                            lower interest rates.
                          </li>
                          <li className="mb-2">
                            <b>Credit Score:</b> Monitor your credit score
                            regularly and take steps to improve it by making
                            timely payments and reducing credit utilization.
                          </li>
                        </ul>
                      </li>

                      <li className="big-li mb-4">
                        <h3 className="h4 h3-md mb-3">
                          Financial Education and Planning
                        </h3>
                        <p className="text-secondary mb-3">
                          Continuously educate yourself on personal finance and
                          plan for the future:
                        </p>
                        <ul className="dot ps-3">
                          <li className="mb-2">
                            <b>Seek Knowledge:</b> Take advantage of financial
                            literacy resources, workshops, and online courses to
                            enhance your understanding of investments, taxes,
                            and estate planning.
                          </li>
                          <li className="mb-2">
                            <b>Set Financial Goals:</b> Establish short-term and
                            long-term financial goals (buying a home, starting a
                            business, retiring early) and create actionable
                            plans to achieve them.
                          </li>
                        </ul>
                      </li>

                      <li className="big-li mb-4">
                        <h3 className="h4 h3-md mb-3">
                          Adapting to Life Changes
                        </h3>
                        <p className="text-secondary mb-3">
                          Adjust your financial plan as your life circumstances
                          evolve:
                        </p>
                        <ul className="dot ps-3">
                          <li className="mb-2">
                            <b>Career Advancement:</b> Increase savings and
                            investments with salary raises or bonuses. Reassess
                            budget and financial goals periodically.
                          </li>
                          <li className="mb-2">
                            <b>Major Life Events:</b> Prepare financially for
                            major life events such as marriage, parenthood, or
                            relocating to a new city.
                          </li>
                        </ul>
                      </li>

                      <li className="big-li mb-4">
                        <h3 className="h4 h3-md mb-3">
                          Building Financial Resilience
                        </h3>
                        <p className="text-secondary mb-3">
                          Build resilience against financial setbacks and
                          unexpected expenses:
                        </p>
                        <ul className="dot ps-3">
                          <li className="mb-2">
                            <b>Insurance Coverage:</b> Ensure adequate health,
                            disability, and life insurance coverage to protect
                            against unforeseen circumstances.
                          </li>
                          <li className="mb-2">
                            <b>Estate Planning:</b> Establish a will, designate
                            beneficiaries, and plan for estate distribution to
                            protect assets and ensure your wishes are carried
                            out.
                          </li>
                        </ul>
                      </li>
                    </ol>

                    <div className="conclusion mt-5 p-4 bg-light rounded">
                      <h3 className="h4 h3-md mb-3">Conclusion</h3>
                      <p className="mb-0">
                        Mastering personal finance in your 20s and 30s is not
                        just about managing money—it's about laying a solid
                        foundation for financial independence and security. By
                        adopting disciplined saving habits, investing wisely,
                        and creating a sustainable budget, you can build a
                        prosperous future and achieve your financial goals.
                        Start early, educate yourself, and prioritize financial
                        wellness to navigate the opportunities and challenges
                        that lie ahead. With dedication and strategic planning,
                        you can confidently pave the way towards financial
                        success and stability in the years to come.
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

export default Business;
