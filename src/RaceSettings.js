import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';
import Modal from './Modal';

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

    handleConfirm = () => {
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
        const modalId = "settingsModal";
        const modalBody = (
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
        );
        return (
            <div>
                <button type="button" 
                        className="btn btn-link p-0 header-icon" 
                        onMouseOver={() => this.setState({ rotate: true })}
                        onMouseOut={() => this.setState({ rotate: false })}
                        onClick={() => this.setState({ tempSettings: { ...this.state.settings } })}
                        disabled={this.props.disabled}
                        data-toggle="modal"
                        data-target={"#" + modalId}>
                    <FontAwesomeIcon icon="cog" size="lg" fixedWidth spin={this.state.rotate}/>
                </button>
                <Modal id={modalId} 
                       body={modalBody} 
                       title="Race settings" 
                       icon={<FontAwesomeIcon icon="wrench" size="xs"/>} 
                       onConfirm={this.handleConfirm}/>
            </div>
        );
    }
}

export default RaceSettings;