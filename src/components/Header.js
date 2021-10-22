import * as React from 'react';
import './Header.scss';
import EventLogoEnglish from '../assets/Invincible_english.png';
import EventLogoSpanish from '../assets/Invincible_spanish.png';
import EventLogoPortuguese from '../assets/Invincible_portuguese.png';
import locale from '../Data/locales.json';

const Header = (props) => {
    const { language, isFirstPage } = props;

    return (
        <header>
            <div className="company-name">
              {
                !isFirstPage ?
                (   language === 'english' ? 
                        <img src={EventLogoEnglish} alt="Invincible event logo" /> : 
                    language === 'spanish' ? 
                        <img src={EventLogoSpanish} alt="Invincible event logo" /> : 
                        <img src={EventLogoPortuguese} alt="Invincible event logo"/>
                ) :
                <div></div>
              }
              <h1>{locale[language]['CALA SUPERHERO NAME GENERATOR']}</h1>
            </div>
        </header>
    );
};

export default Header;
