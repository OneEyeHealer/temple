import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
const Event = ({title, label, description, list, imgUrl}) => {
    return (
        <Fragment>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card mx-2 my-4">
                    <h5 className="card-header event-label">{label}</h5>
                    <img src={imgUrl} className="card-img-top rounded" alt="logo" width="5em" height="200px"/>
                    <div className="card-body event-height">
                        <h5 className="card-title text-center">{title}</h5>
                        <p className="card-text">{description}</p>
                        <ul className="list-group list-group-flush">
                            {list.map((item, index) => {
                                return <li key={index} className="list-group-item">{item}</li>
                            })}
                        </ul>
                        {/*<Link to="/home" className="btn btn-primary">Know More</Link>*/}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Event;
