import * as React from 'react';
import locale from '../Data/language.json';

const EnterName = (props) => {
  const { language, firstName, lastName, handleFirstName, handleLastName } = props;

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
    </div>
  )
}

export default EnterName;