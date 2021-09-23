import * as React from 'react';
import { Link } from 'react-router-dom';
import locale from '../Data/language.json';

const GenderSelector = (props) => {
  const { language, gender, handleGenderSelection, progress, setProgress, setPrevProgress } = props;
  const isNextLinkVisible = gender !== '';
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
      <Link to="/secret-identity" className={isNextLinkVisible ? '' : 'invisible'}>
        Chapter 3: Secret Identity
      </Link>
    </>
  );
};

export default GenderSelector;