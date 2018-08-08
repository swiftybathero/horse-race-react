import React, { Component } from 'react';

class AddContestantForm extends Component {
    state = {
        horseName: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.horseName) {
            return;
        }

        this.props.onAddContestantClick(this.state.horseName);
        this.setState({
            horseName: ""
        });
    }

    render() {
        return (
            <form className="contestant-form" ref="contestantForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="horseName">Horse name</label>
                    <div className="input-group">
                        <input type="text" 
                            id="horseName" 
                            name="horseName"
                            value={this.state.horseName}
                            className="form-control"
                            placeholder="Enter your horse name" 
                            onChange={this.handleInputChange}
                            disabled={this.props.disabled}
                            autoComplete="off"/>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-success" disabled={this.props.disabled || !this.state.horseName}>Add</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddContestantForm;