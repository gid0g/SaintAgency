import React from "react";

function Form() {
  return (
    <>
      <div className="row mt-4 max-margin">
        <div className="col-12">
          <h5>
            {" "}
            <span className="text-danger"> ___</span> &nbsp; Contact
          </h5>
          <h1 className="h1ss">Join Us in Creating Something Great </h1>
        </div>
        <div className="row">
          <div className="col-7 border-radius">
            <div className="formSection text-secondary px-4 py-4 border-radius">
              <h1 className="mb-4">Leave a Comment</h1>

              <div className="pt-2 my-3 px-2 mx-0 w-100">
                <form className="row mx-0 px-0">
                  <div className="col-6 form-floating mb-3">
                    <input
                      type="text"
                      className="form-control bg-secondary-subtle"
                      id="floatingInput"
                      placeholder=""
                    />
                    <label for="floatingInput"> &nbsp;&nbsp; Name</label>
                  </div>
                  <div className="col-6 form-floating mb-3">
                    <input
                      type="email"
                      className="form-control bg-secondary-subtle"
                      id="floatingInput"
                      placeholder=""
                    />
                    <label for="floatingInput">&nbsp;&nbsp;Email</label>
                  </div>

                  <div className="mb-3">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-secondary-subtle"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: "300px" }}
                      ></textarea>
                      <label for="floatingTextarea2">Message</label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-black text-white w-100"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="row " style={{ height: "2rem" }} />
            </div>
          </div>
          <div className="col-5 border-radius bg-secondary-subtle p-4">
            <h2 className="text-secondary my-3">Address</h2>
            <h2 className="my-4 py-3">
              Plot 23-24, Darrow Road, Valley Industrial Estate, Lagos, Nigeria
            </h2>
            <h2 className="text-secondary my-3">Phone</h2>
            <h2 className="my-3 py-2">+234 705 8925 042</h2>
            <h3 className="my-3 py-2">Media Social</h3>
            <div className="row">
              <div className="col-6">
                <p>Facebook</p>
              </div>
              <div className="col-6">
                <p>Instagram</p>
              </div>
              <div className="col-6">
                <p>Twitter</p>
              </div>
              <div className="col-6">
                <p>LinkedinIn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row " style={{ height: "7rem" }} />
      </div>
    </>
  );
}

export default Form;
