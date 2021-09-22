import * as React from 'react';
import SuccessModal from './SuccessModal';
import Button from '@material-ui/core/Button';
import name from '../Data/name.json';
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
    reset
  } = props;
  const [ counter, setCounter ] = React.useState(-1);
  const [ displayText, setDisplayText ] = React.useState('');
  const isSubmitBtnDisabled = displayText !== '' || heroName === '' || (firstName === '' && lastName === '');
  const PREFIX_ARRAY = Object.keys(name.prefix).filter(item => item.includes(language) && item.includes(gender));
  const SUFFIX_ARRAY = Object.keys(name.suffix).filter(item => item.includes(language) && item.includes(gender));
  const prefixLength = PREFIX_ARRAY.length;
  const suffixLength = SUFFIX_ARRAY.length;

  React.useEffect(
    () => {
      if (counter > 0) {
        setDisplayText(WAITING_MESSAGES[counter]);
      }
    },
    [counter]
  );

  const randomizer = () => {
    const randomPrefixNumber = Math.floor(Math.random() * prefixLength);
    const randomSuffixNumber = Math.floor(Math.random() * suffixLength);
    const heroName1 = name.prefix[PREFIX_ARRAY[randomPrefixNumber]];
    const heroName2 = name.suffix[SUFFIX_ARRAY[randomSuffixNumber]];
    handleHeroName(`${heroName1} ${heroName2}`);
  };

  const displayProgress = () => {
    setCounter((counter) => counter + 1);
    setDisplayText(WAITING_MESSAGES[0]);
    const timerOut = setTimeout(
      () => {
        clearTimeout(timerOut);
        randomizer();
      },
      7500
    );
    if (counter < 3) {
      const timer = setInterval(
        () => {
          if (counter >= 3) {
            clearInterval(timer);
          }
          setCounter((counter) => counter + 1);
        },
        1500
      );
    };
  };

  return (
    <div className="name-generator-container">
      <h2>Hi {firstName} {lastName}!</h2>
      <h3>Let's get your hero name!</h3>
      <Button 
        onClick={displayProgress}
        disabled={counter > -1}
      >
        {locale[language].generate}
      </Button>
        {
          displayText ? 
          (
            <>
              <h3>{displayText}</h3>
              <div className={`progress_${(counter + 1) * 100 / 5}`}></div>
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
        reset={reset}
      />
    </div>
  );
};

export default NameGenerator;
