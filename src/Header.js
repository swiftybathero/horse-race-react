import React from 'react';
import RaceSettings from './RaceSettings';

const Header = (props) => {
    return (
        <header className="page-header"> 
            <div className="row">
                <div className="col d-none d-md-block"></div>
                <div className="col-10">
                    <h1 className="display-4 text-center">{props.message}</h1>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end">
                        <RaceSettings onSaveSettings={props.onSaveSettings}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;