import React, {Fragment, useState} from 'react';
import PageHeading from "../common/pageHeading";
import Offer from "../offer/offer";

const Offering = ({user}) => {
    return (
        <Fragment>
            <div className="container">
                <PageHeading title="Offerings"/>
                <Offer user={user}/>
            </div>
        </Fragment>
    );
};

export default Offering;
