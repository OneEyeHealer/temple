import React, {Fragment} from 'react';
import './offer.css';

const SearchBox = ({value, onChange}) => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-3 my-auto text-right remove-padding">
                <i className="fa fa-search"/>
                </div>
                <div className="col">
                <input
                    type="text"
                    name="query"
                    className="form-control my-3"
                    placeholder="Search..."
                    value={value}
                    onChange={e => onChange(e.currentTarget.value)}
                />
                </div>
            </div>
        </Fragment>
    );
};

export default SearchBox;