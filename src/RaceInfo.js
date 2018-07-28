import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';

const RaceInfo = () => {
    const modalId = "infoModal";
    const modalBody = (
        <React.Fragment>
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
        </React.Fragment>
    );
    return (
        <div>
            <button className="btn btn-link p-0 header-icon"
                    data-toggle="modal"
                    data-target={"#" + modalId}>
                <FontAwesomeIcon icon="info" size="lg" fixedWidth/>
            </button>
            <Modal id={modalId}
                   body={modalBody}
                   title="About"
                   icon={<FontAwesomeIcon icon="info-circle" size="sm"/>}/>
        </div>
    );
}

export default RaceInfo;