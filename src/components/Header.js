import * as React from 'react';
import './Header.scss';
import AbbottLogo from '../assets/abbott_logo.png';
import locale from '../Data/locales.json';

const Header = (props) => {
    const { language } = props;
    return (
        <header>
            <div className="company-name">
                <img src={AbbottLogo} alt="abbott logo"/>
                <h1>{locale[language]['CALA SUPERHERO NAME GENERATOR']}</h1>
            </div>
        </header>
    );
};

export default Header;
