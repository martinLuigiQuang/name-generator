import * as React from 'react';
import NameGenerator from './NameGenerator';
import locale from '../Data/locales.json';
import './EnterName.scss';

const EnterName = (props) => {
  const { 
    language,
    gender,
    heroName,
    handleHeroName,
    handleFirstName, 
    handleLastName, 
    firstName, 
    lastName
  } = props;

  const [currentFirstName, setCurrentFirstName] = React.useState(firstName);
  const [currentLastName, setCurrentLastName] = React.useState(lastName);
  const saveCurrentFirstName = (e) => {
    setCurrentFirstName(e.target.value);
  };

  const saveCurrentLastName = (e) => {
    setCurrentLastName(e.target.value);
  };

  const saveNames = () => {
    handleFirstName(currentFirstName.toUpperCase());
    handleLastName(currentLastName.toUpperCase());
  };
  
  return (
    <div className="name-container">
      <div className="outer-box">
        <div className="task">
          <label htmlFor="firstName">
            <input type="text" id="firstName" value={currentFirstName} onChange={saveCurrentFirstName} placeholder={locale[language]['FIRST NAME']}/>
          </label>
          <label htmlFor="lastName">
            <input type="text" id="lastName" value={currentLastName} onChange={saveCurrentLastName} placeholder={locale[language]['LAST NAME']}/>
          </label>
          <NameGenerator 
            language={language}
            gender={gender}
            heroName={heroName}
            currentFirstName={currentFirstName}
            currentLastName={currentLastName}
            handleHeroName={handleHeroName}
            saveNames={saveNames}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterName;
