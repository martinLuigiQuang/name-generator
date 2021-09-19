import * as React from 'react';
import { Link } from 'react-router-dom';
import locale from '../Data/language.json';

const GenderSelector = (props) => {
  const { language, gender, handleGenderSelection } = props;
  const isNextLinkVisible = gender !== '';

  return (
    <>
      <div onChange={handleGenderSelection}>
        <label htmlFor="gender">{locale[language].gender}</label>
        <label htmlFor="male">{locale[language].male}</label>
        <input type="radio" id="male" name="gender" value="M" checked={gender === 'M'}/>
        <label htmlFor="female">{locale[language].female}</label>
        <input type="radio" id="female" name="gender" value="F" checked={gender === 'F'}/>
        <label htmlFor="neutral">{locale[language].neutral}</label>
        <input type="radio" id="neutral" name="gender" value="N" checked={gender === 'N'}/>
      </div>
      <Link to="/name" className={isNextLinkVisible ? '' : 'invisible'}>
        Next
      </Link>
    </>
  );
};

export default GenderSelector;