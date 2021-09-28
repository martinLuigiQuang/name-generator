import * as React from 'react';
import { Link } from 'react-router-dom';
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
    handleFirstName(currentFirstName);
    handleLastName(currentLastName);
  };
  
  return (
    <div className="name-container">
      {/* <div className="chapter-container">
        <h1>Chapter 2: Secret Identity</h1>
      </div> */}
      <div className="outer-box">
        <div className="task">
          <h2>No one knows that a civilian who goes by the name</h2>
          <label htmlFor="firstName">
            <input type="text" id="firstName" value={currentFirstName} onChange={saveCurrentFirstName} placeholder="first name"/>
          </label>
          <label htmlFor="lastName">
            <input type="text" id="lastName" value={currentLastName} onChange={saveCurrentLastName} placeholder="last name"/>
          </label>
          <h2>is about to become the city's protector.</h2>
          <Link 
            to="/persona"
            onClick={saveNames}
            className={isNextLinkVisible ? '' : 'invisible'}
          >
            Unlock chapter 3 {`>`}
          </Link>
        </div>
      </div>
      <NameGenerator 
        language={language}
        gender={gender}
        firstName={firstName}
        lastName={lastName}
        heroName={heroName}
        handleSubmit={handleSubmit}
        handleHeroName={handleHeroName}
        // onCapture={onCapture}
      />
    </div>
  );
};

export default EnterName;
