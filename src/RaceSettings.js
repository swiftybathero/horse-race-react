import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RaceSettings = () => {
    return (
        <button type="button" className="btn btn-link p-0 settings-icon">
            <FontAwesomeIcon icon="cogs" size="2x"/>
        </button>
    );
}

export default RaceSettings;