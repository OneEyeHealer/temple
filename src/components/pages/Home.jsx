import React, { Fragment, useRef, useState } from "react";
import PassGenerator from "../../PassGenerator/PassGenerator";
import poster from "../../img/Prerna_youth_fest_2024.png";
import qrCodePay from "../../img/qr_code_payment.jpg";
import CarouselImage from "../../Carousel/CarouselImage";
import DysSection from "./../DysSection";
import PageSection from "./../PageSection";
import FaqSection from "./../FaqSection";
import NewOffering from "./../common/newOffering";
import logo from "./../../img/logo.png";
import PageHeading from "../common/pageHeading";
import DYS from "./../../DYS/DYS";

const Home = ({ match, location }) => {
  const [formType, setFormType] = useState("");
  const handleFormType = (value) => {
    setFormType(value);
  };
  const handleFormReset = () => {
    setFormType("");
  };
  console.log(location.pathname.split("/")[2]);
  return (
    <Fragment>
      <header className="container-fluid text-white">
        {/* <div className="container m-0 position-absolute new-offering-position">
          {match.url === "/home" ? <NewOffering /> : undefined}
        </div> */}
        <div className="container">
          <div className="row">
            <div className="container mt-5">
              <h3 className="text-center">
                Prerna Youth Fest Registration <br /> 2024
              </h3>
              <div className="under-line"></div>
            </div>
            {/* <div className="container mt-4 text-center">
              <p>
                <em>
                  To upload or submit your receipt{" "}
                  <a href="https://forms.gle/4MF6aqqk4shBzatb7">click here.</a>
                </em>
              </p>
            </div> */}
            <div className="my-auto col-lg-6 col-sm-12 pt-1">
              {formType === "" && (
                <>
                  <div className="container choose-form">
                    <h3 className="text-center text-white pb-3">
                      Register for Prerna Fest
                    </h3>
                    <div className="row">
                      <div className="col text-center">
                        {/* <button
                          className="btn btn-warning px-4 m-auto"
                          onClick={() => handleFormType("Student")}
                        >
                          Student
                        </button> */}
                        <a
                          href={
                            location.pathname.split("/")[2] === "viyf"
                              ? "https://tinyurl.com/PRERNA-REG-2023"
                              : "https://forms.gle/nCZmucLsYMdEgiPr8"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-warning px-4 m-auto">
                            Register
                          </button>
                        </a>
                      </div>

                      {/* <div className="col text-center">
                        <button
                          className="btn btn-warning px-4 m-auto"
                          onClick={() => handleFormType("Working")}
                        >
                          Working
                        </button>
                        <a
                          href="https://forms.gle/FUQ9yY1SYqkCs7pJ8"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-warning px-4 m-auto">
                            Working
                          </button>
                        </a>
                      </div> */}
                    </div>
                    {/* <DYS
                      title="Discover Yourself (DYS) "
                      formReset={handleFormReset}
                    /> */}
                    <div className="row mt-3">
                      <div className="col text-center">
                        <p>
                          <b>Note:</b>{" "}
                          <em className=" under-line-small font-weight-bolder">
                            Prerna Youth Fest
                          </em>{" "}
                          is{" "}
                          <b className="text-warning">
                            Free of Cost{" "}
                            <span className="text-success">(no charges)</span>
                          </b>{" "}
                          and if are bringing your{" "}
                          <b className="text-warning">Friends </b> in the{" "}
                          <em className=" under-line-small font-weight-bolder">
                            Prerna Youth Fest
                          </em>{" "}
                          make sure he/she is{" "}
                          <span className="under-line-small">
                            register via about link
                          </span>
                          .
                        </p>
                        {/* <p>You can also pay by scanning</p>
                        <img src={qrCodePay} alt="" width="auto" height={450} /> */}
                      </div>
                    </div>
                  </div>
                </>
              )}
              {formType === "Working" && (
                <PassGenerator
                  working
                  title={formType}
                  pathname={location.pathname}
                  formReset={handleFormReset}
                />
              )}
              {formType === "Student" && (
                <PassGenerator
                  student
                  title={formType}
                  pathname={location.pathname}
                  formReset={handleFormReset}
                />
              )}
            </div>
            <div className="col-lg-6 col-sm-12 py-5">
              <div className="container">
                <img src={poster} alt="" width="100%" height="auto" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="App">
          <img className="iskcon-logo" src={logo} alt="iskcon-logo" />
        </div> */}
      </header>
      <main className="container my-5">
        <DysSection />
        <PageSection />
        <div className="carousel-box">
          <PageHeading title="Gallery" />
          {/* <h1 className="text-center mb-4">Gallery</h1> */}
          <CarouselImage />
        </div>
        {/* <FaqSection /> */}
      </main>
    </Fragment>
  );
};
export default Home;
