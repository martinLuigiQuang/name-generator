import * as React from 'react';
import './Languages.scss';
import SpeechBubble from './SpeechBubble';
import Bubble from '../assets/speech_bubble_1.png';

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
    <form className="language-container">
      <div className="chapter-container">
        <h1>Chapter 1: Origin</h1>
      </div>
      <label htmlFor="english">
        <input type="radio" id="english" name="language" value="english" checked={language === 'english'} onChange={handleLanguageSelector}/>
        <SpeechBubble 
          text="I speak English"
          imgSrc={Bubble}
        />
      </label>
      <label htmlFor="spanish">
        <input type="radio" id="spanish" name="language" value="spanish" checked={language === 'spanish'} onChange={handleLanguageSelector}/>
        <SpeechBubble 
          text="Hablo Español"
          imgSrc={Bubble}
        />
      </label>
      <label htmlFor="portuguese">
        <input type="radio" id="portuguese" name="language" value="portuguese" checked={language === 'portuguese'} onChange={handleLanguageSelector}/>
        <SpeechBubble 
          text="Eu falo Português"
          imgSrc={Bubble}
        />
      </label>
    </form>
  );
};

export default LanguageSelector;
