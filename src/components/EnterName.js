import * as React from 'react';
import { Link } from 'react-router-dom';
import locale from '../Data/language.json';

const EnterName = (props) => {
  const { language, handleFirstName, handleLastName } = props;
  const [currentFirstName, setCurrentFirstName] = React.useState('');
  const [currentLastName, setCurrentLastName] = React.useState('');
  const isNextLinkVisible = currentFirstName !== '' || currentLastName !== '';
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
      <Link to="/gender">
        Something's wrong.<br/>Go Back!
      </Link>
      <Link 
        to="/hero-name" 
        onClick={saveNames} 
        className={isNextLinkVisible ? '' : 'invisible'}
      >
        Next
      </Link>
    </div>
  );
};

export default EnterName;