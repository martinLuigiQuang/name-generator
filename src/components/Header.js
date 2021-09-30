import * as React from 'react';
import './Header.scss';
import AbbottLogo from '../assets/Invincible Word Mark.png';

const Header = () => {
    return (
        <header>
            <div className="company-name">
                <img src={AbbottLogo} alt="abbott logo"/>
                <h1>CALA Superhero Name Generator</h1>
            </div>
        </header>
    );
};

export default Header;
