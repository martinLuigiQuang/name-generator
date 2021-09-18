import * as React from 'react';
import { Link } from 'react-router-dom';

const LanguageSelector = (props) => {
  const { handleLanguageSelector, language } = props;

  return (
    <>
      <div onChange={handleLanguageSelector}>
        <label htmlFor="language">Language</label>
        <label htmlFor="english">English</label>
        <input type="radio" id="english" name="language" value="english" checked={language === 'english'}/>
        <label htmlFor="spanish">Spanish</label>
        <input type="radio" id="spanish" name="language" value="spanish" checked={language === 'spanish'}/>
        <label htmlFor="portuguese">Portuguese</label>
        <input type="radio" id="portuguese" name="language" value="portuguese" checked={language === 'portuguese'}/>
      </div>
      <Link to="/gender">Next</Link>
    </>
  )
};

export default LanguageSelector;
