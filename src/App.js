import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    return (
        <div className="row">
            <div className="col">
                <header className="page-header">
                    <h1 className="display-3">{props.message}</h1>
                </header>
            </div>
        </div>
    );
}

const StateButton = (props) => {
    return (
        <div className="row">
            <div className="col button-section">
                <button type="button" className="btn btn-success btn-block" onClick={props.onHandleClick}>STATE + 1</button>
            </div>
        </div>
    );
}

const ProgressBar = (props) => {
    let progressStyle = {
        width: props.value + "%"
    };
    let progressClassName = "progress-bar" + (props.value >= 100 ? " bg-success" : "");

    return (
        <div className="progress">
            <div className={progressClassName} role="progressbar" style={progressStyle}></div>
        </div>
    );
}

class App extends Component {
    state = {
        progressValue: 0
    };

    handleClick = () => {
        this.setState((prevState) => {
            return {
                progressValue: prevState.progressValue + 10
            };
        });
    };

    render() {
        return (
            <div className="container">
                <Header message="Welcome ReactJS!"/>
                <div className="row">
                    <div className="col">
                        <ProgressBar value={this.state.progressValue}/>
                    </div>
                </div>
                <StateButton onHandleClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;
