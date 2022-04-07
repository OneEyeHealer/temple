import React, {Fragment} from 'react';
import Event from "../common/event";
import PageHeading from "../common/pageHeading";
import {activityData} from "./pagesData";

const Activity = ({title, label, description, imgUrl, list,}) => {
    return (
        <Fragment>
            <div className="container App">
                <PageHeading title="Activities" />
                <div className="row">
                    {activityData.map((data, index)=>{
                        return(
                            <Event
                                key={index}
                                title={data[title]}
                                label={data[label]}
                                description={data[description]}
                                imgUrl={data[imgUrl]}
                                list={data[list]}
                            />
                        )
                    })}
                </div>
            </div>
        </Fragment>
    );
};

Activity.defaultProps ={
    title: "title",
    label: "label",
    description: "description",
    imgUrl: "imgUrl",
    list: "list"
}

export default Activity;
