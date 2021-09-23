import * as React from 'react';
import { Link } from 'react-router-dom';
import locale from '../Data/language.json';

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
      if (progress[4]) {
        setProgress([true, true, true, true, false]);
        setPrevProgress(4);
      }
      if (!progress[3]) {
        setProgress([true, true, true, true, false]);
        setPrevProgress(2);
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
    <div>
      <div onChange={saveCurrentFirstName}>
        <label htmlFor="firstName">{locale[language].firstName}</label>
        <input type="text" id="firstName" value={currentFirstName}/>
      </div>
      <div onChange={saveCurrentLastName}>
        <label htmlFor="lastName">{locale[language].lastName}</label>
        <input type="text" id="lastName" value={currentLastName}/>
      </div>
      <Link 
        to="/code-name" 
        onClick={saveNames} 
        className={isNextLinkVisible ? '' : 'invisible'}
      >
        Chapter 4: Rebirth
      </Link>
    </div>
  );
};

export default EnterName;