import React, {Fragment} from 'react';
import Player from "./media/Player";
import {DYS, style} from "./pages/pagesData";

const DysSection = ({key, title,details}) => {
    return (
        <Fragment>
            <section className="container m-3">
                <h1 className="App">
                    DYS
                    <span className="text-primary"> 6 SESSION </span>
                    SERIES
                    <span className="text-success"> UNLOCK THE SELF </span>
                </h1>
                <Player
                    title="Discover Yourself - Six Session Spiritual Course Promo"
                    url="https://youtu.be/NvY8ObB6_sU"
                    width="auto"
                    height="500px"
                />
                {DYS.map(data =>{
                    return (
                        <div key={data[key]} className="container m-auto">
                            <h4 className="text-left">
                                <span className="text-info">
                                    {data[key] === 'dysIntro'?
                                        <h2 className="App text-warning">Discover Yourself</h2> :
                                        <span> <i className="fa fa-star text-warning"/> &nbsp;{data[key]}</span>}</span>&nbsp;
                                {data[title]}</h4>
                            <p style={style}>{data[details]}</p>

                        </div>
                    )
                })}
            </section>
        </Fragment>
    );
};

DysSection.defaultProps ={
    key: "key",
    title: "title",
    details: "details",
}

export default DysSection;
