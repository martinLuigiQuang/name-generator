import * as React from 'react';
import NameGenerator from './NameGenerator';
import locale from '../Data/language.json';
import './EnterName.scss';

const EnterName = (props) => {
  const { 
    language,
    gender,
    heroName,
    handleHeroName,
    handleSubmit, 
    handleFirstName, 
    handleLastName, 
    firstName, 
    lastName,
    progress,
    setProgress,
    // onCapture
  } = props;
  const [currentFirstName, setCurrentFirstName] = React.useState(firstName);
  const [currentLastName, setCurrentLastName] = React.useState(lastName);
  const isNextLinkVisible = currentFirstName !== '' || currentLastName !== '';
  React.useEffect(
    () => {
      if (!progress[2]) {
        setProgress([true, true, true]);
      }
    }
  );
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
            <input type="text" id="firstName" value={currentFirstName} onChange={saveCurrentFirstName} placeholder="first name"/>
          </label>
          <label htmlFor="lastName">
            <input type="text" id="lastName" value={currentLastName} onChange={saveCurrentLastName} placeholder="last name"/>
          </label>
          <NameGenerator 
            language={language}
            gender={gender}
            firstName={firstName}
            lastName={lastName}
            heroName={heroName}
            handleSubmit={handleSubmit}
            handleHeroName={handleHeroName}
            saveNames={saveNames}
            currentFirstName={currentFirstName}
            currentLastName={currentLastName}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterName;
