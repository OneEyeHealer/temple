import React, {Fragment} from 'react';

const PageHeading = ({title}) => {
    return (
        <Fragment>
            <h2 className="horizontal-line hl-left hl-right">{title}</h2>
        </Fragment>
    );
};

export default PageHeading;