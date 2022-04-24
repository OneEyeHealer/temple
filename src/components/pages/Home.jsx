import React, { Fragment, useRef, useState } from "react";
import PassGenerator from "../../PassGenerator/PassGenerator";
import poster from "../../img/Prerna_poster_1.jpg";
import CarouselImage from "../../Carousel/CarouselImage";

const Home = ({ match }) => {
  const [formType, setFormType] = useState("");
  const handleFormType = (value) => {
    setFormType(value);
  };
  const handleFormReset = () => {
    setFormType("");
  };
  return (
    <Fragment>
      <header className="container-fluid">
        {/* <div className="container m-0 position-absolute new-offering-position">
          {match.url === "/home" ? <NewOffering /> : undefined}
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 pt-1">
              {formType === "" && (
                <>
                  <div className="container form-title">
                    <h3 className="text-center">
                      Prerna Youth Fest Registration
                    </h3>
                    <div className="under-line"></div>
                  </div>
                  <div className="container choose-form">
                    <h3 className="text-center pb-3">
                      Are You Student or Working ?
                    </h3>
                    <div className="row">
                      <div className="col text-center">
                        <button
                          className="btn btn-danger px-4 m-auto"
                          onClick={() => handleFormType("students")}
                        >
                          Student
                        </button>
                      </div>

                      <div className="col text-center">
                        <button
                          className="btn btn-success px-4 m-auto"
                          onClick={() => handleFormType("working")}
                        >
                          Working
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {formType === "working" && (
                <PassGenerator
                  working
                  title={formType}
                  formReset={handleFormReset}
                />
              )}
              {formType === "students" && (
                <PassGenerator
                  student
                  title={formType}
                  formReset={handleFormReset}
                />
              )}
            </div>
            <div className="col-lg-6 col-sm-12 py-5">
              <img src={poster} alt="" width="100%" height="auto" />
            </div>
          </div>
        </div>
        {/* <div className="App">
          <img className="iskcon-logo" src={logo} alt="iskcon-logo" />
        </div> */}
      </header>
      <main className="container my-5">
        <div className="carousel-box">
          <h1 className="text-center mb-4">Gallery</h1>
          <CarouselImage />
        </div>
        {/* <DysSection />
                <PageSection />
                <FaqSection /> */}
      </main>
    </Fragment>
  );
};
export default Home;
