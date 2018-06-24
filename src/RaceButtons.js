import React from 'react';

const RaceButtons = (props) => {
    return (
        <div className="button-section">
            <button 
                type="button" 
                className="btn btn-success btn-block" 
                onClick={props.onStartRaceClick} 
                disabled={props.disabled}>
                Start race
            </button>
            <button 
                type="button" 
                className="btn btn-danger btn-block" 
                onClick={props.onResetRaceClick}
                disabled={props.disabled}>
                Reset contestants
            </button>
        </div>
    );
}

export default RaceButtons;