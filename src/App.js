import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import RaceButtons from './RaceButtons';
import AddContestantForm from './AddContestantForm';
import HorseList from './HorseList';
import $ from 'jquery';

class App extends Component {
    state = {
        horses: [],
        raceFinished: false,
        raceInProgress: false
    };

    randomize = () => {
        const min = 1;
        const max = 5; 

        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    startRaceClick = () => {
        setTimeout(this.runRace, 1);
    };

    runRace = () => {
        if (this.state.horses.length <= 0) {
            return;
        }
        let raceFinished = false;
        
        this.setState({ raceInProgress: true });

        if (this.state.raceFinished === true) {
            this.resetPositions();
            return;
        }

        this.state.horses.forEach((horse) => {
            let randomValue = this.randomize();
            horse.position += randomValue;
            if (horse.position >= 100) {
                raceFinished = true;
            }
        });

        if (raceFinished === false) {
            setTimeout(this.runRace, 100);
        } 
        else {
            this.setState({ 
                raceInProgress: false,
                raceFinished: true
            })
        }
    };

    resetPositions = () => {
            this.state.horses.forEach((horse) => { horse.position = 0 });
            this.setState({ raceFinished: false });
            setTimeout(this.runRace, 1000);
    }    

    resetRaceClick = () => {
        $('#horseList').collapse('toggle');
        $('#horseList').on('hidden.bs.collapse', () => {
            this.setState({ 
                horses: [],
                raceFinished: false
            });
            $('#horseList').collapse('toggle');
        });
    }

    addContestantClick = (contestantName) => {
        this.setState((prevState) => {
            return {
                horses: prevState.horses.concat({
                    id: prevState.horses.length + 1,
                    name: contestantName,
                    position: 0,
                    getProgressDOMId: () => {
                        return "horse-" + (prevState.horses.length + 1);
                    },
                    getGroupDOMId: () => {
                        return "horse-group-" + (prevState.horses.length + 1);
                    }
                })
            };
        }, () => {
            $('#' + this.state.horses[this.state.horses.length - 1].getGroupDOMId()).collapse('toggle');
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
                        <AddContestantForm onAddContestantClick={this.addContestantClick} disabled={this.state.raceInProgress}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <HorseList horses={this.state.horses}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <RaceButtons 
                            onStartRaceClick={this.startRaceClick} 
                            onResetRaceClick={this.resetRaceClick}
                            disabled={this.state.raceInProgress || !this.state.horses.length}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
