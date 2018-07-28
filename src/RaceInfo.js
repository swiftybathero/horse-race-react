import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RaceInfo = () => {
    return (
        <div>
            <button className="btn btn-link p-0 header-icon"
                    data-toggle="modal"
                    data-target="#infoModal">
                <FontAwesomeIcon icon="info" size="lg" fixedWidth/>
            </button>
            <div className="modal fade" tabIndex="-1" role="dialog" id="infoModal">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <FontAwesomeIcon icon="info-circle" size="sm"/>
                            <span className="ml-2">About</span>
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-3"><p className="font-weight-bold">Author</p></div>
                                <div className="col-sm"><p>Paweł Klatt</p></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"><p className="font-weight-bold">Description</p></div>
                                <div className="col-sm"><p>Remake of oldschool DynamicsAX minigame</p></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"><p className="font-weight-bold">Technologies</p></div>
                                <div className="col-sm"><p>ReactJS, jQuery, HTML5, Bootstrap 4</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RaceInfo;