import * as React from 'react';
import locale from '../Data/language.json';
import SpeechBubble from '../assets/speech_bubble_2.png';
import './Gender.scss';

const GenderSelector = (props) => {
  const { language, gender, handleGenderSelection, progress, setProgress, setPrevProgress } = props;
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
    <div className="gender-container">
      <div className="outer-box">
        <div className="task">
          <h2>The city needs help. Time to put your mask on.</h2>
          <div className="selections-container">
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" value="M" checked={gender === 'M'} onChange={handleGenderSelection}/>
              <h2>{locale[language].male}</h2>
            </label>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" value="F" checked={gender === 'F'} onChange={handleGenderSelection}/>
              <h2>{locale[language].female}</h2>
            </label>
            <label htmlFor="neutral">
              <input type="radio" id="neutral" name="gender" value="N" checked={gender === 'N'} onChange={handleGenderSelection}/>
              <h2>{locale[language].neutral}</h2>
            </label>
          </div>
        </div>
      </div>
      <div className="speech-1">
        <img src={SpeechBubble}/>
        <h2>I need a hero!</h2>
      </div>
      <div className="speech-2">
        <img src={SpeechBubble}/>
        <h2>Help me!!!</h2>
      </div>
      <div className="speech-3">
        <img src={SpeechBubble}/>
        <h2>Aaaahhhhh!!</h2>
      </div>
    </div>
  );
};

export default GenderSelector;
