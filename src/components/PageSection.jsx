import React, {Fragment} from 'react';
import {homePageData, style} from "./pages/pagesData";
import PageHeading from "./common/pageHeading";
import offering from "../img/PROMINENT_COURSES_WE_OFFER.png";

const PageSection = ({keyProperty, titleProperty,detailsProperty,}) => {
    return (
        <Fragment>
            <section className="container mx-3">
                {homePageData.map((data)=>{
                    return(
                        <div key={data[keyProperty]} className="m-auto container">
                            <PageHeading title={data[titleProperty]}/>
                            {data[detailsProperty].map((item, index) => {
                                return <p key={data[keyProperty] + index} style={style}>{item}</p>
                            })}
                            {data[keyProperty] === "weOffer"
                                ? <Fragment>
                                    <div className="App m-auto">
                                        <h3 className="pb-4">Prominent Courses We Offer</h3>
                                        <img key={data[keyProperty]} src={offering} alt="offering" width="60%"
                                             height="auto"/>
                                    </div>
                                </Fragment>
                                : null}
                        </div>
                    )
                })}
                {/*<img src={offering} alt="offering" className="App" width="100%" height="auto"/>*/}
            </section>
        </Fragment>
    );
};
PageSection.defaultProps ={
    keyProperty: "key",
    titleProperty: "title",
    detailsProperty: "details",
}
export default PageSection;
