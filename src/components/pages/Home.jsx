import React, { Fragment, useRef, useState } from "react";
import PassGenerator from "../../PassGenerator/PassGenerator";
import poster from "../../img/Prerna_poster_1.jpg";
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
                Prerna Youth Fest Registration <br /> 2023
              </h3>
              <div className="under-line"></div>
            </div>
            <div className="my-auto col-lg-6 col-sm-12 pt-1">
              {formType === "" && (
                <>
                  <div className="container choose-form">
                    <h3 className="text-center text-white pb-3">
                      Are You Student or Working ?
                    </h3>
                    <div className="row">
                      <div className="col text-center">
                        <button
                          className="btn btn-warning px-4 m-auto"
                          onClick={() => handleFormType("Student")}
                        >
                          Student
                        </button>
                      </div>

                      <div className="col text-center">
                        <button
                          className="btn btn-warning px-4 m-auto"
                          onClick={() => handleFormType("Working")}
                        >
                          Working
                        </button>
                      </div>
                    </div>
                    {/* <DYS
                      title="Discover Yourself (DYS) "
                      formReset={handleFormReset}
                    /> */}
                    {/* <div className="row mt-3">
                      <div className="col text-center">
                        <p>
                          <b>Note:</b> For this DYS you need to Pay{" "}
                          <b>₹100 (commitment charges)</b> on{" "}
                          <b className="text-primary">8287732634</b> via any
                          mode{" "}
                          <b className="text-success">
                            (upi, phone pay, google pay, paytm)
                          </b>{" "}
                          which are completely refundable after you complete
                          your session and send the screenshort of the payment
                          on the same number.
                        </p>
                      </div>
                    </div> */}
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
                <img
                  src={"/img/prerna_september_2023.jpg"}
                  alt=""
                  width="100%"
                  height="auto"
                />
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
