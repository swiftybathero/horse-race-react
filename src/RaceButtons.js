import React from 'react';

const RaceButtons = (props) => {
    return (
        <div className="button-section">
            <button type="button" className="btn btn-success btn-block" onClick={props.onStartRaceClick}>Start race</button>
        </div>
    );
}

export default RaceButtons;