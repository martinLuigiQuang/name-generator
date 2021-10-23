import * as React from 'react';
import Button from '@material-ui/core/Button';
import superheroNames from '../Data/superhero_names.json';
import locale from '../Data/locales.json';
import { Link } from 'react-router-dom';
import './NameGenerator.scss';

const NameGenerator = (props) => {
  const { 
    language, 
    gender,
    heroName, 
    currentFirstName,
    currentLastName,
    handleHeroName,
    saveNames,
    setIsGenerateButtonClicked
  } = props;
  
  const [ counter, setCounter ] = React.useState(-1);
  const [ displayText, setDisplayText ] = React.useState('');
  const [ currentHeroName, setCurrentHeroName ] = React.useState(heroName);
  const isSubmitBtnDisabled = displayText !== '' || currentHeroName === '' || gender === '' 
                              || currentFirstName === '' || currentLastName === '';
  const isGenerateBtnDisabled = counter > -1 || language === '' || gender === '';
  const superheroNamesArr = superheroNames[language];

  const WAITING_MESSAGES = [
    locale[language]['ACCESSING SUPERFORCE DATABASE'],
    locale[language]['ANALYZING RESULTS FROM ALTERNATE REALITIES'],
    locale[language]['INFUSING INVINCIBILITY'],
    locale[language]['YOUR SUPERHERO NAME IS']
  ];

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
    setIsGenerateButtonClicked(true);
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
      6000
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

  const handleLink = async () => {
    await saveNames();
    await handleHeroName(currentHeroName.toUpperCase());
  };

  const handleOnBlur = () => {
    handleHeroName(currentHeroName.toUpperCase());
    setIsGenerateButtonClicked(true);
  };

  return (
    <div className="name-generator-container">
      <h2>{locale[language]['LET\'S UNCOVER YOUR SUPERHERO IDENTITY!']}</h2>
      <Button 
        onClick={displayProgress}
        disabled={isGenerateBtnDisabled}
      >
        {locale[language]['CLICK TO GENERATE NAME']}
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
                placeholder={locale[language]['OR ENTER HERE TO CREATE YOUR OWN']}
                type="text" 
                value={currentHeroName} 
                id="heroName" 
                name="heroName"
                disabled={isGenerateBtnDisabled}
                onBlur={handleOnBlur}
                onChange={e => setCurrentHeroName(e.target.value)}
              />
            </label>
          )
        }
      <div className="navigation-bar">
        <Link to="/persona">{`< ${locale[language]['BACK']}`}</Link>
        {
          isSubmitBtnDisabled ? null :
          (
            <Link 
              to='/superhero-name'
              id='submit'
              onClick={handleLink}
              disabled={isSubmitBtnDisabled}
            >
              {`${locale[language]['NEXT']} >`}
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default NameGenerator;
