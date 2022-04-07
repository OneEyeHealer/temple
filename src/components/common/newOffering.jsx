import React, {Fragment} from 'react';
import Button from "./button";
import {NavLink} from "react-router-dom";

const NewOffering = () => {
    return (
        <Fragment>
            <div className="container m-4 ">
            <NavLink to="/offerings/new">
                <Button title="+ new offering" className="btn btn-primary" />
            </NavLink>
            </div>
        </Fragment>
    );
};

export default NewOffering;
