import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faWrench, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Header from './Header';
import RaceButtons from './RaceButtons';
import AddContestantForm from './AddContestantForm';
import HorseList from './HorseList';
import { randomize } from './randomize'

library.add(faCog, faWrench, faInfo, faInfoCircle);

class App extends Component {
    state = {
        horses: [],
        raceFinished: false,
        raceInProgress: false,
        settings: {
            minMoveValue: 1,
            maxMoveValue: 5
        }
    }

    startRaceClick = () => {
        setTimeout(this.runRace, 1);
    }

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
            let randomValue = randomize({
                min: this.state.settings.minMoveValue,
                max: this.state.settings.maxMoveValue
            });
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
    }

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
            }
        }, () => {
            $('#' + this.state.horses[this.state.horses.length - 1].getGroupDOMId()).collapse('toggle');
        });
    }

    handleSaveSettings = (settings) => {
        this.setState({ settings: settings });
    }

    render() {
        let raceInProgress = this.state.raceInProgress;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Header message="HorseRace React" 
                                onSaveSettings={this.handleSaveSettings}
                                settingsDisabled={raceInProgress}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <AddContestantForm onAddContestantClick={this.addContestantClick} disabled={raceInProgress}/>
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
