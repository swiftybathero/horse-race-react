import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal fade" tabIndex="-1" role="dialog" id={props.id}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">
                        {props.icon}
                        <span className="ml-2">{props.title}</span>
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="container-fluid">
                        {props.body}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    {props.onConfirm && <button type="button" className="btn btn-success" onClick={props.onConfirm}>Apply</button>}
                </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;