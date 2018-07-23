import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

const DefaultSettings = {
    minMoveValue: 1,
    maxMoveValue: 5
}

class RaceSettings extends Component {
    state = {
        rotate: false,
        settings: { ...DefaultSettings },
        tempSettings: { ...DefaultSettings }
    }

    handleInputChange = (e) => {
        let eventData = { 
            [e.target.name]: e.target.value ? parseInt(e.target.value, 10) : 0 
        }
        this.setState((prevState) => {
            return {
                tempSettings: {
                    ...prevState.tempSettings,
                    ...eventData
                }
            }
        })
    }

    handleSaveSettings = () => {
        $('#settingsModal').modal('toggle');
        this.setState({
            settings: {
                ...this.state.tempSettings
            }
        }, () => {
            this.props.onSaveSettings(this.state.settings);
        })
    }

    render() {
        return (
            <div>
                <button type="button" 
                        className="btn btn-link p-0 header-icon" 
                        onMouseOver={() => this.setState({ rotate: true })}
                        onMouseOut={() => this.setState({ rotate: false })}
                        onClick={() => this.setState({ tempSettings: { ...this.state.settings } })}
                        disabled={this.props.disabled}
                        data-toggle="modal"
                        data-target="#settingsModal">
                    <FontAwesomeIcon icon="cog" size="lg" fixedWidth spin={this.state.rotate}/>
                </button>
                <div className="modal fade" tabIndex="-1" role="dialog" id="settingsModal">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <FontAwesomeIcon icon="wrench" size="xs"/>
                                <span className="ml-2">Race settings</span>
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <form>
                                    <div className="form-group">
                                        <label>Minimum move value</label>
                                        <input className="form-control" 
                                               type="number" 
                                               name="minMoveValue" 
                                               onChange={this.handleInputChange}
                                               value={this.state.tempSettings.minMoveValue}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Maximum move value</label>
                                        <input className="form-control" 
                                               type="number" 
                                               name="maxMoveValue" 
                                               onChange={this.handleInputChange}
                                               value={this.state.tempSettings.maxMoveValue}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={this.handleSaveSettings}>Apply</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RaceSettings;