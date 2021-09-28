import * as React from 'react';
import SpeechBubble from './SpeechBubble';
import Bubble from '../assets/speech_bubble_2.png';
import { Link } from 'react-router-dom';
import './Languages.scss';

const LanguageSelector = (props) => {
  const { handleLanguageSelector, language, setProgress, progress } = props;
  React.useEffect(
    () => {
      if (progress[1]) {
        setProgress([true, false, false]);
      }
    }
  );
  return (
    <>
      <form className="language-container">
        <label htmlFor="english">
          <input type="radio" id="english" name="language" value="english" checked={language === 'english'} onChange={handleLanguageSelector}/>
          <SpeechBubble 
            text="English"
            imgSrc={Bubble}
          />
        </label>
        <label htmlFor="spanish">
          <input type="radio" id="spanish" name="language" value="spanish" checked={language === 'spanish'} onChange={handleLanguageSelector}/>
          <SpeechBubble 
            text="Español"
            imgSrc={Bubble}
          />
        </label>
        <label htmlFor="portuguese">
          <input type="radio" id="portuguese" name="language" value="portuguese" checked={language === 'portuguese'} onChange={handleLanguageSelector}/>
          <SpeechBubble 
            text="Português"
            imgSrc={Bubble}
          />
        </label>
        <Link to="/persona">Next {`>`}</Link>
      </form>
    </>
  );
};

export default LanguageSelector;
