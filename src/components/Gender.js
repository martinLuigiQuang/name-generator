import * as React from 'react';
import locale from '../Data/language.json';

const GenderSelector = (props) => {
  const { language, handleGenderSelection } = props;

  return (
    <div onChange={handleGenderSelection}>
      <label htmlFor="gender">{locale[language].gender}</label>
      <label htmlFor="male">{locale[language].male}</label>
      <input type="radio" id='male' name='gender' value='M'/>
      <label htmlFor="female">{locale[language].female}</label>
      <input type="radio" id='female' name='gender' value='F' />
      <label htmlFor="neutral">{locale[language].neutral}</label>
      <input type="radio" id='neutral' name='gender' value='N' />
    </div>
  )
};

export default GenderSelector;