import * as React from 'react';
import locale from '../Data/language.json';
import SpeechBubble from './SpeechBubble';
import Bubble1 from '../assets/speech_bubble_2.png';
import Mask from '../assets/hero_mask.png';
import { Link } from 'react-router-dom';
import './Gender.scss';

const GenderSelector = (props) => {
  const { language, gender, handleGenderSelection, progress, setProgress, setPrevProgress } = props;
  const isNextLinkVisible = gender !== '';
  React.useEffect(
    () => {
      if (progress[4]) {
        setProgress([true, true, true, true, false]);
        setPrevProgress(4);
      }
      if (!progress[3]) {
        setProgress([true, true, true, true, false]);
        setPrevProgress(2);
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
          <Link 
            to="/code-name"
            className={isNextLinkVisible ? '' : 'invisible'}
          >
            Next {`>`}
          </Link>
        </div>
      </div>
      <div className="chapter-container">
        <SpeechBubble 
          text="Chapter 3: Persona"
          imgSrc={Mask}
        />
      </div>
      <div className="speech-1">
        <SpeechBubble 
          text="Help me!"
          imgSrc={Bubble1}
        />
      </div>
      <div className="speech-2">
        <SpeechBubble 
          text="AAAAHHHHHH!!!"
          imgSrc={Bubble1}
        />
      </div>
    </div>
  );
};

export default GenderSelector;
