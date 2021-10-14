import * as React from 'react';
import './Header.scss';
import AbbottLogo from '../assets/abbott_logo.png';
import locale from '../Data/locales.json';

const Header = (props) => {
    const { language } = props;
    return (
        <header>
            <div className="company-name">
                <h1>{locale[language]['CALA SUPERHERO NAME GENERATOR']}</h1>
                <img src={AbbottLogo} alt="abbott logo"/>
            </div>
        </header>
    );
};

export default Header;
