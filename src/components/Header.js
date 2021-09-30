import * as React from 'react';
import './Header.scss';
import AbbottLogo from '../assets/abbott_logo.png';

const Header = () => {
    return (
        <header>
            <div className="company-name">
                <h1>CALA Superhero Name Generator</h1>
                <img src={AbbottLogo} alt="abbott logo"/>
            </div>
        </header>
    );
};

export default Header;
