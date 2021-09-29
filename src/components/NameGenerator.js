import * as React from 'react';
import Button from '@material-ui/core/Button';
import superheroNames from '../Data/superhero_names.json';
import locale from '../Data/language.json';
import { Link } from 'react-router-dom';
import './NameGenerator.scss';

const WAITING_MESSAGES = ['OPENING EINSTEIN-ROSEN BRIDGE', 'WORMHOLE STABILIZED', 'ANALYSING RESULTS FROM ALTERNATE REALITIES', 'RESOLVING TIME TRAVEL PARADOXES', 'AND YOUR HERO NAME IS ...'];

const NameGenerator = (props) => {
  const { 
    language, 
    gender, 
    firstName,
    lastName,
    heroName, 
    handleSubmit,
    handleHeroName,
    saveNames,
    // onCapture
  } = props;
  const [ counter, setCounter ] = React.useState(-1);
  const [ displayText, setDisplayText ] = React.useState('');
  const [ currentHeroName, setCurrentHeroName ] = React.useState(heroName);
  const isSubmitBtnDisabled = displayText !== '' || heroName === '' || (firstName === '' && lastName === '');
  const isGenerateBtnDisabled = counter > -1 || language === '' || gender === '';
  const superheroNamesArr = superheroNames[language];

  React.useEffect(
    () => {
      if (counter > 0) {
        setDisplayText(WAITING_MESSAGES[counter]);
      }
    },
    [counter]
  );

  const randomizer = () => {
    const index1 = Math.floor(Math.random() * superheroNamesArr.length);
    const index2 = Math.floor(Math.random() * superheroNamesArr.length);
    const randomNumber = Math.floor(Math.random() * 100);
    let sex = gender;
    if (gender === 'N') {
      sex = randomNumber % 2 ? 'F' : 'M';
    }
    const descriptor = superheroNamesArr[index1][`Descriptor.${sex}`];
    const title = superheroNamesArr[index2][`Title.${sex}`];
    saveNames();
    handleHeroName(`${descriptor} ${title}`.toUpperCase());
  };

  const displayProgress = () => {
    setCounter((counter) => counter + 1);
    setDisplayText(WAITING_MESSAGES[0]);
    const timerOut = setTimeout(
      () => {
        clearTimeout(timerOut);
        randomizer();
      },
      5000
    );
    if (counter < 3) {
      const timer = setInterval(
        () => {
          if (counter >= 3) {
            clearInterval(timer);
          }
          setCounter((counter) => counter + 1);
        },
        1000
      );
    };
  };

  return (
    <div className="name-generator-container">
      <h3>Let's get your hero name!</h3>
      <Button 
        onClick={displayProgress}
        disabled={isGenerateBtnDisabled}
      >
        {locale[language].generate}
      </Button>
        {
          displayText ? 
          (
            <>
              <h3>{displayText}</h3>
              <div className="progress"></div>
            </>
          ) 
          :
          (
            <label htmlFor="heroName">
              <input 
                placeholder="or create your own"
                type="text" 
                value={currentHeroName} 
                id="heroName" 
                name="heroName"
                onChange={e => setCurrentHeroName(e.target.value)}
                onBlur={() => {
                  saveNames();
                  handleHeroName(currentHeroName.toUpperCase())}
                }
              />
            </label>
          )
        }
      <div className="navigation-bar">
        <Link to='/superhero-name'
          id='submit'
          onClick={handleSubmit}
          disabled={isSubmitBtnDisabled}
        >
          {locale[language].submit}
        </Link>
      </div>
    </div>
  );
};

export default NameGenerator;
