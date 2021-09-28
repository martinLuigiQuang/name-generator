import * as React from 'react';
import NavigationBar from './NavigationBar';
import './Header.scss';
import AbbottLogo from '../assets/abbott_logo.png';
import EventiveLogo from '../assets/eventive_logo.jpg';

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
