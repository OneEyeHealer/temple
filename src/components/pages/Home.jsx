import React, { Fragment } from "react";
import logo from "../../img/logo.png";
import PassGenerator from "../../PassGenerator/PassGenerator";
import NewOffering from "../common/newOffering";
import poster from "../../img/Prerna_poster_1.jpg";
import CarouselImage from "../../Carousel/CarouselImage";

const Home = ({ match }) => {
  return (
    <Fragment>
      <header className="container-fluid">
        {/* <div className="container m-0 position-absolute new-offering-position">
          {match.url === "/home" ? <NewOffering /> : undefined}
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 py-5">
              <img src={poster} alt="" width="100%" height="auto" />
            </div>
            <div className="col-lg-6 col-sm-12 pt-5">
              <PassGenerator />
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
