import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContestantForm from './AddContestantForm'

const Header = (props) => {
    return (
        <header className="page-header">
            <h1 className="display-3">{props.message}</h1>
        </header>
    );
}

const StartRaceButton = (props) => {
    return (
        <div className="button-section">
            <button type="button" className="btn btn-success btn-block" onClick={props.onStartRaceClick}>Start race</button>
        </div>
    );
}

const HorseList = (props) => {
    return (
        props.horses.map(horse => <Horse key={horse.id} {...horse} />)
    );
}

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

class App extends Component {
    state = {
        horses: []
    };

    startRaceClick = () => {
        console.log("Race started!")
    };

    addContestantClick = (contestantName) => {
        this.setState((prevState) => {
            return {
                horses: prevState.horses.concat({
                    id: prevState.horses.length + 1,
                    name: contestantName
                })
            };
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Header message="HorseRace React"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <AddContestantForm onAddContestantClick={this.addContestantClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <HorseList horses={this.state.horses}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <StartRaceButton onStartRaceClick={this.startRaceClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
