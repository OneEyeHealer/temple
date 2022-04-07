import React, {Fragment} from 'react';

const Button = ({title, ...rest}) => {
    return (
        <Fragment>
            <button{...rest}>{title}</button>
        </Fragment>
    );
};

export default Button;
