import * as React from 'react';
import './Header.scss';
import EventLogo from '../assets/Invincible Word Mark.png';
import locale from '../Data/locales.json';

const Header = (props) => {
    const { language } = props;
    return (
        <header>
            <div className="company-name">
                <img src={EventLogo} alt="Invincible event logo"/>
                <h1>{locale[language]['CALA SUPERHERO NAME GENERATOR']}</h1>
            </div>
        </header>
    );
};

export default Header;
