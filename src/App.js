import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContestantForm from './AddContestantForm';
import HorseList from './HorseList';

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

class App extends Component {
    state = {
        horses: []
    };
    raceId = 0;

    startRaceClick = () => {
        setTimeout(this.runRace, 1);
    };

    randomize = () => {
        const min = 1;
        const max = 5;
        var rand = Math.floor(Math.random() * (max - min + 1)) + min;

        return rand;
    };

    runRace = () => {
        let raceFinished = false;
        this.state.horses.forEach((horse) => {
            let randomValue = this.randomize();
            horse.position += randomValue;
            if (horse.position >= 100) {
                raceFinished = true;
            }
        });
        this.setState(this.state);

        if (!raceFinished) {
            setTimeout(this.runRace, 100);
        }
    };

    addContestantClick = (contestantName) => {
        this.setState((prevState) => {
            return {
                horses: prevState.horses.concat({
                    id: prevState.horses.length + 1,
                    name: contestantName,
                    position: 0
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
