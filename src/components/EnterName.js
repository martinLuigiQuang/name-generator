import * as React from 'react';
import { Link } from 'react-router-dom';
import locale from '../Data/language.json';

const EnterName = (props) => {
  const { language, handleFirstName, handleLastName } = props;

  const [currentFirstName, setCurrentFirstName] = React.useState('');
  const [currentLastName, setCurrentLastName] = React.useState('');
  
  const isNextLinkVisible = currentFirstName !== '' || currentLastName !== '';
  
  return (
    <div>
      <div onChange={(e)=> {
        setCurrentFirstName(e.target.value);
      }}>
        <label htmlFor="firstName">{locale[language].firstName}</label>
        <input type="text" id="firstName" value={currentFirstName}/>
      </div>
      <div onChange={(e)=> {
        setCurrentLastName(e.target.value);
      }}>
        <label htmlFor="lastName">{locale[language].lastName}</label>
        <input type="text" id="lastName" value={currentLastName}/>
      </div>
      <Link onClick={()=> {
        handleFirstName(currentFirstName);
        handleLastName(currentLastName);
      }} to="/hero-name" className={isNextLinkVisible ? '' : 'invisible'}>
        Next
      </Link>
    </div>
  );
};

export default EnterName;