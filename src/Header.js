import React from 'react';

const Header = (props) => {
    return (
        <header className="page-header">
            <h1 className="display-4 text-center">{props.message}</h1>
        </header>
    );
}

export default Header;