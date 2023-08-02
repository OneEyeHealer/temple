import React from "react";
import Player from "./media/Player";
import { DYS, style } from "./pages/pagesData";

const DysSection = ({ key, title, details }) => {
  return (
    <>
      <section className="container m-3">
        <h1 className="App">
          DYS
          <span className="text-primary"> 6 SESSION </span>
          SERIES
          <span className="text-success"> UNLOCK THE SELF </span>
        </h1>
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube-nocookie.com/embed/eLf5iMfpyHc"
          title="Discover Yourself - Six Session Spiritual Course Promo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <Player
          title="Discover Yourself - Six Session Spiritual Course Promo"
          url="https://youtu.be/eLf5iMfpyHc"
          width="auto"
          height="500px"
        /> */}
        {DYS.map((data) => {
          return (
            <div key={data[key]} className="container m-auto">
              <h4 className="text-left">
                <span className="text-info">
                  {data[key] === "dysIntro" ? (
                    <>
                      <h2 className="App text-warning">Discover Yourself</h2>
                      <p>
                        Session will be held on every Sunday via{" "}
                        <b className="text-warning">
                          Online (Zoom meeting)/ Offline (Temple Recommended)
                        </b>{" "}
                        so be there for the session and Below is the brief of
                        the sessions.
                      </p>
                    </>
                  ) : (
                    <span>
                      {" "}
                      <i className="fa fa-star text-warning" /> &nbsp;
                      {data[key]}
                    </span>
                  )}
                </span>
                &nbsp;
                {data[title]}
              </h4>
              <p style={style}>{data[details]}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

DysSection.defaultProps = {
  key: "key",
  title: "title",
  details: "details",
};

export default DysSection;
