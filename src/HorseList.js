import React from 'react';

const Horse = (props) => {
    let progressClassName = "progress-bar" + (props.position >= 100 ? " bg-success" : "");
    let progressStyle = {
        width: props.position + "%"
    };

    return (
        <div className="form-group row horse">
            <label className="col-sm-2 col-form-label" htmlFor={"horse-" + props.id}>{props.name}</label>
            <div className="col-sm-10 horse-progress">
                <div className="progress">
                    <div className={progressClassName} id={"horse-" + props.id} role="progressbar" style={progressStyle}></div>
                </div>
            </div>
        </div>
    );
}

const HorseList = (props) => {
    return (
        <div className={"collapse show"} /*data-toggle="collapse"*/ id="horseList">
            {props.horses.map(horse => <Horse key={horse.id} {...horse} />)}
        </div>
    );
}

export default HorseList;