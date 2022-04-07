import React, {Fragment} from 'react';
import Button from "./button";
import {NavLink} from "react-router-dom";

const EmptyTable = (props) => {
    const {columns} = props;
    return (
        <Fragment>
            <tr>
                <td className="py-5" colSpan={columns}>
                    <h2>
                        Add Offering in the Database.
                    </h2>
                    <div className="my-3">
                        <NavLink to="/offerings/new">
                            <Button title="+ new offering" className="btn btn-primary" />
                        </NavLink>
                    </div>
                </td>
            </tr>
        </Fragment>
    );
};

export default EmptyTable;
