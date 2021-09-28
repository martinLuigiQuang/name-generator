import * as React from 'react';
import NavigationBar from './NavigationBar';
import './Header.scss';
import AbbottLogo from '../assets/abbott_logo.png';
import EventiveLogo from '../assets/eventive_logo.jpg';

const Header = (props) => {
    const { progress, prevProgress, setPrevProgress, firstName, lastName, gender } = props;
    return (
        <header>
            <div className="company-name">
                <h1>CALA Superhero Name Generator</h1>
                <img src={AbbottLogo} alt="abbott logo"/>
            </div>
            <NavigationBar 
                progress={progress}
                prevProgress={prevProgress}
                setPrevProgress={setPrevProgress}
                firstName={firstName}
                lastName={lastName}
                gender={gender}
            />
        </header>
    );
};

export default Header;
