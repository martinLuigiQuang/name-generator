import * as React from 'react';
import { Link } from 'react-router-dom';
import locale from '../Data/language.json';
import './EnterName.scss';

const EnterName = (props) => {
  const { 
    language, 
    handleFirstName, 
    handleLastName, 
    firstName, 
    lastName,
    progress,
    setProgress,
    setPrevProgress 
  } = props;
  const [currentFirstName, setCurrentFirstName] = React.useState(firstName);
  const [currentLastName, setCurrentLastName] = React.useState(lastName);
  const isNextLinkVisible = currentFirstName !== '' || currentLastName !== '';
  React.useEffect(
    () => {
      if (progress[3]) {
        setProgress([true, true, true, false, false]);
        setPrevProgress(3);
      }
      if (!progress[2]) {
        setProgress([true, true, true, false, false]);
        setPrevProgress(1);
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
      <div className="chapter-container">
        <h1>Chapter 2: Secret Identity</h1>
      </div>
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
    </div>
  );
};

export default EnterName;
