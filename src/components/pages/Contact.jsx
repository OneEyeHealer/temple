import React, {Fragment} from 'react';
import PageHeading from "../common/pageHeading";
import contact from '../../img/contact.svg';

const Contact = () => {
    return (
        <Fragment>
            <div className="container">
                <PageHeading title="Contact"/>
                <div className="container">
                    <div className="card">
                        <h5 className="card-header text-center">Featured</h5>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                    <img src={contact} alt="contact"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <dl className="row">
                                        <dt className="col-sm-2 text-center bg-info my-auto p-3 rounded"><i className="fa fa-map-marker"/></dt>
                                        <dd className="col-sm-10 justify-content-around my-auto">
                                            <a href="https://www.google.com/maps/dir/28.6892637,77.0679584/iskcon+rohini/@28.7117319,77.0621053,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d06cbd3e81819:0x1d2c012230ccb560!2m2!1d77.096953!2d28.7293317">
                                                Plot No-3, Institutional Area, Main Road, Pocket D, Sector 25, Rohini, New Delhi, Delhi 110085
                                            </a>
                                        </dd>
                                    </dl>
                                    <dl className="row">
                                        <dt className="col-sm-2 text-center bg-info my-auto p-3 rounded"><i className="fa fa-phone"/></dt>
                                        <dd className="col-sm-10 julist-groupy-content-around my-auto">
                                            <li className="list-group">
                                                <a href="tel:9136120402">
                                                    +91-9136120402
                                                </a>
                                            </li>
                                            <li className="list-group">
                                                <a href="tel:9996531168">
                                                    +91-9996531168
                                                </a>
                                            </li>
                                        </dd>
                                    </dl>
                                    <dl className="row">
                                        <dt className="col-sm-2 text-center bg-info my-auto p-3 rounded"><i className="fa fa-envelope"/></dt>
                                        <dd className="col-sm-10 justify-content-around my-auto">
                                            <a href="mailto:iyfrohinimedia@gmail.com">
                                                iyfrohinimedia@gmail.com
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Contact;