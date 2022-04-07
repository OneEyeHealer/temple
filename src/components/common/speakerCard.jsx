import React, {Fragment} from 'react';

const SpeakerCard = ({title, profession, imgUrl}) => {
    return (
        <Fragment>
            <div className="col-4">
                <img
                    className="rounded-circle"
                    src={imgUrl}
                    alt="Avatar"
                    width="200px"
                    height="200px"
                />
                <h3>{title}</h3>
                <p className="w-50 mx-auto">{profession}</p>
            </div>
        </Fragment>
    );
};

export default SpeakerCard;