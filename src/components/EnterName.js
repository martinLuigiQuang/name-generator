import * as React from 'react';
import { Link } from 'react-router-dom';
import locale from '../Data/language.json';

const EnterName = (props) => {
  const { language, firstName, lastName, handleFirstName, handleLastName } = props;
  const isNextLinkVisible = firstName !== '' && lastName !== '';

  return (
    <div>
      <div onChange={handleFirstName}>
        <label htmlFor="firstName">{locale[language].firstName}</label>
        <input type="text" id="firstName" value={firstName}/>
      </div>
      <div onChange={handleLastName}>
        <label htmlFor="lastName">{locale[language].lastName}</label>
        <input type="text" id="lastName" value={lastName}/>
      </div>
      <Link to="/hero-name" className={isNextLinkVisible ? '' : 'invisible'}>
        Next
      </Link>
    </div>
  )
}

export default EnterName;