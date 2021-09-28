import * as React from 'react';
import locale from '../Data/language.json';
import SpeechBubble from './SpeechBubble';
import Bubble1 from '../assets/speech_bubble_2.png';
import Mask from '../assets/hero_mask.png';
import { Link } from 'react-router-dom';
import './Gender.scss';

const GenderSelector = (props) => {
  const { language, gender, handleGenderSelection, progress, setProgress } = props;
  const isNextLinkVisible = gender !== '';
  React.useEffect(
    () => {
      if (progress[2] || !progress[1]) {
        setProgress([true, true, false]);
      }
    }
  );
  return (
    <div className="gender-container">
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
      <div className="navigation-bar">
        <Link to="/">{`<`} Back</Link>
        <Link 
          to="/secret-identity"
          className={isNextLinkVisible ? '' : 'invisible'}
        >
          Next {`>`}
        </Link>
      </div>
    </div>
  );
};

export default GenderSelector;
