import * as React from 'react';
import './Header.scss';
import EventLogoEnglish from '../assets/Invincible Word Mark.png';
import EventLogoSpanish from '../assets/Invincible_SPANISH.png';
import EventLogoPortuguese from '../assets/Invincible_PORT.png';
import locale from '../Data/locales.json';

const Header = (props) => {
    const { language } = props;

    console.log(language, 'lang');

    return (
        <header>
            <div className="company-name">
              {language === 'english' ? <img src={EventLogoEnglish} alt="Invincible event logo" /> : language === 'spanish' ? <img src={EventLogoSpanish} alt="Invincible event logo" /> : <img src={EventLogoPortuguese} alt="Invincible event logo"/>
              }
              <h1>{locale[language]['CALA SUPERHERO NAME GENERATOR']}</h1>
            </div>
        </header>
    );
};

export default Header;
