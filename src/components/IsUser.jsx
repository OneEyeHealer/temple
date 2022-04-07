import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

const IsUser = ({user}) => {
    return (
        <Fragment>
            {!user && (
                <>
                    <li className="nav-li">
                        <NavLink className="nav-login" to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink className="nav-login" to="/register">
                            Register
                        </NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li className="nav-li">
                        <NavLink
                            // className="nav-login bg-warning rounded-circle text-light"
                            to="/profile"
                        >
                            {/*{user.name.split(" ")[0][0]}*/}
                            {/*{user['name']}*/}
                            {<img className="rounded-circle"
                                  src="https://www.theindiansun.com.au/wp-content/uploads/2020/10/krishna_radha.jpg"
                                  alt="iyfrohini" width="40" height='40'/>}
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink className="nav-login" to="/logout">
                            {/*Logout*/}
                            <i className="fa fa-sign-out"/>
                        </NavLink>
                    </li>
                </>
            )}
        </Fragment>
    );
};

export default IsUser;
