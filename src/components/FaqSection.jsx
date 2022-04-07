import React, { Fragment } from "react";
import PageHeading from "./common/pageHeading";
import { FAQ } from "./pages/pagesData";

const FaqSection = ({ key, ques, ans }) => {
  return (
    <Fragment>
      <section className="container-fluid mx-3">
        <PageHeading title="FAQ" />
        {FAQ.map((data, index) => {
          return (
            <div key={data[key]} className="m-auto container-fluid">
              <div className="row">
                <div className="col-lg-11 col-md-11 col-sm-11 m-auto">
                  <span className="text-info head-t">Q&nbsp;{index + 1}:</span>
                  &nbsp;&nbsp;
                  <span className="ques">{data[ques]}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-11 col-md-11 col-sm-11 m-auto">
                  <span className="text-info head-t">A&nbsp;{index + 1}:</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="ans m-auto">{data[ans]}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
};

FaqSection.defaultProps = {
  key: "key",
  ques: "ques",
  ans: "ans",
};

export default FaqSection;
