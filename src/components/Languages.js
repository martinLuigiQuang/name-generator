import * as React from 'react';
import { Link } from 'react-router-dom';

const LanguageSelector = (props) => {
  const { handleLanguageSelector, language, setProgress, progress, setPrevProgress } = props;
  React.useEffect(
    () => {
      if (progress[2]) {
        setProgress([true, true, false, false, false]);
        setPrevProgress(2)
      }
      if (!progress[1]) {
        setProgress([true, true, false, false, false]);
        setPrevProgress(0);
      }
    }
  );
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
      <Link to="/persona">Chapter 2: Persona</Link>
    </>
  );
};

export default LanguageSelector;
