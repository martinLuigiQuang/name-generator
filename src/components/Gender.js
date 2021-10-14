import * as React from 'react';
import locale from '../Data/locales.json';
import { Link } from 'react-router-dom';
import './Gender.scss';

const GenderSelector = (props) => {
  const { language, gender, handleGenderSelection } = props;
  const isNextLinkVisible = gender !== '';

  return (
    <div className="gender-container">
      <div className="selections-container">
        <label htmlFor="male">
          <input type="radio" id="male" name="gender" value="M" checked={gender === 'M'} onChange={handleGenderSelection}/>
          <h2>{locale[language]['MALE']}</h2>
        </label>
        <label htmlFor="female">
          <input type="radio" id="female" name="gender" value="F" checked={gender === 'F'} onChange={handleGenderSelection}/>
          <h2>{locale[language]['FEMALE']}</h2>
        </label>
        <label htmlFor="neutral">
          <input type="radio" id="neutral" name="gender" value="N" checked={gender === 'N'} onChange={handleGenderSelection}/>
          <h2>{locale[language]['GENDER NEUTRAL']}</h2>
        </label>
      </div>
      <div className="navigation-bar">
        <Link to="/">{`< ${locale[language]['BACK']}`}</Link>
        <Link 
          to="/secret-identity"
          className={isNextLinkVisible ? '' : 'invisible'}
        >
          {`${locale[language]['NEXT']} >`}
        </Link>
      </div>
    </div>
  );
};

export default GenderSelector;
