import * as React from 'react';
import './Language.scss';
import SpeechBubble from '../assets/speech_bubble_1.png';

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
    <form className="language-container">
      <label htmlFor="english">
        <input type="radio" id="english" name="language" value="english" checked={language === 'english'} onChange={handleLanguageSelector}/>
        <img src={SpeechBubble}/>
        <h2>I speak English</h2>
      </label>
      <label htmlFor="spanish">
        <input type="radio" id="spanish" name="language" value="spanish" checked={language === 'spanish'} onChange={handleLanguageSelector}/>
        <img src={SpeechBubble}/>
        <h2>Hablo Español</h2>
      </label>
      <label htmlFor="portuguese">
        <input type="radio" id="portuguese" name="language" value="portuguese" checked={language === 'portuguese'} onChange={handleLanguageSelector}/>
        <img src={SpeechBubble}/>
        <h2>Eu falo Português</h2>
      </label>
    </form>
  );
};

export default LanguageSelector;
