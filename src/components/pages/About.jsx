import React, {Fragment} from 'react';
import {aboutPageData, IyfGoals} from "./pagesData";
import PageHeading from "../common/pageHeading";
import './pages.css';

const About = (props) => {
    const {
        hProperty,
        pProperty,
        classHProperty,
        classPProperty,
        goalProperty} = props;

    return (
        <Fragment>
            <div className="container">
                <PageHeading title="About"/>
                {aboutPageData.map((item, index)=>{
                    return (
                    <div className="container" key={index}>
                        <h2 className={item[classHProperty]}>
                            {item[hProperty]}
                        </h2>
                        <p className={item[classPProperty]}>{item[pProperty]}</p>
                    </div>
                    )
                })}
                <div className="container">
                    <h4 className="text-secondary ml-2">The Goals of IYF are as follow.</h4>
                        <ol className="ml-3 justify-content-around">
                            {IyfGoals.map((item, index) => {
                                return (
                                        <li key={index}>{item[goalProperty]}</li>
                                )
                            })}
                        </ol>
                </div>
            </div>
        </Fragment>
    );
};
About.defaultProps = {
    hProperty: "heading",
    pProperty: "paragraph",
    classHProperty: "cHeadingName",
    classPProperty: "cParagraphName",
    goalProperty: "goal"
}
export default About;