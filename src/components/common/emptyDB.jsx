import React, {Fragment} from 'react';

function EmptyDb(props) {
    return (
        <Fragment>
            <div className="container min-vh-100 text-transform-40vh">
                <div className="App">
                    <h3 className="text-secondary">Add some Offerings to Database</h3>
                    <span className="text-muted">
                        <a href="#">
                            <i className="fa fa-plus-circle"/>
                        </a>
                    </span>
                </div>
            </div>
        </Fragment>
    );
}

export default EmptyDb;