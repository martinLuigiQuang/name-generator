import * as React from 'react';
import SuccessModal from './SuccessModal';
import Button from '@material-ui/core/Button';
import superheroNames from '../Data/superhero_names.json';
import locale from '../Data/language.json';
import './NameGenerator.scss';

const WAITING_MESSAGES = ['OPENING EINSTEIN-ROSEN BRIDGE', 'WORMHOLE STABILIZED', 'ANALYSING RESULTS FROM ALTERNATE REALITIES', 'RESOLVING TIME TRAVEL PARADOXES', 'AND YOUR HERO NAME IS ...'];

const NameGenerator = (props) => {
  const { 
    language, 
    gender, 
    handleHeroName,
    heroName, 
    firstName,
    lastName,
    handleSubmit, 
    returnToHomePage,
    isModalOpen,
    reset,
    progress,
    setProgress,
    setPrevProgress
  } = props;
  const [ counter, setCounter ] = React.useState(-1);
  const [ displayText, setDisplayText ] = React.useState('');
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

  React.useEffect(
    () => {
      if (!progress[4]) {
        setProgress([true, true, true, true, true]);
        setPrevProgress(3);
      }
    }
  );

  const randomizer = () => {
    const index1 = Math.floor(Math.random() * superheroNamesArr.length);
    const index2 = Math.floor(Math.random() * superheroNamesArr.length);
    const randomNumber = Math.floor(Math.random() * 100);
    let sex = gender;
    if (gender === 'N') {
      sex = randomNumber % 2 ? 'F' : 'M';
    }
    const descriptor = superheroNamesArr[index1][`descriptor.${sex}`];
    const title = superheroNamesArr[index2][`title.${sex}`];
    handleHeroName(language === 'english' ? `${descriptor} ${title}` : `${title} ${descriptor}`);
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
      <h2>Hi {firstName} {lastName}!</h2>
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
          ) : 
          <h1>{heroName}</h1>
        }
      <Button 
        onClick={handleSubmit}
        disabled={isSubmitBtnDisabled}
      >
        {locale[language].submit}
      </Button>
      <SuccessModal 
        isModalOpen={isModalOpen}
        returnToHomePage={returnToHomePage}
        language={language}
        firstName={firstName}
        lastName={lastName}
        heroName={heroName}
        reset={reset}
      />
    </div>
  );
};

export default NameGenerator;
