import React from 'react';

const Horse = (props) => {
    let progressClassName = "progress-bar" + (props.position >= 100 ? " bg-success" : "");
    let progressStyle = {
        width: props.position + "%"
    };

    return (
        <div className="collapse" id={props.getGroupDOMId()}>
            <div className="form-group row horse">
                <label className="col-sm-2 col-form-label" htmlFor={props.getProgressDOMId()}>{props.name}</label>
                <div className="col-sm-10 horse-progress">
                    <div className="progress">
                        <div className={progressClassName} id={props.getProgressDOMId()} role="progressbar" style={progressStyle}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const HorseList = (props) => {
    return (
        <div className={"collapse show"} id="horseList">
            {props.horses.map(horse => <Horse key={horse.id} {...horse} />)}
        </div>
    );
}

export default HorseList;