import * as React from 'react';
import Button from '@material-ui/core/Button';
import superheroNames from '../Data/superhero_names.json';
import locale from '../Data/language.json';
import { Link } from 'react-router-dom';
import './NameGenerator.scss';

const WAITING_MESSAGES = ['loadingMessage1', 'loadingMessage2', 'loadingMessage3', 'loadingMessage4', 'loadingMessage5'];

const NameGenerator = (props) => {
  const { 
    language, 
    gender,
    heroName, 
    currentFirstName,
    currentLastName,
    handleHeroName,
    saveNames
  } = props;
  const [ counter, setCounter ] = React.useState(-1);
  const [ displayText, setDisplayText ] = React.useState('');
  const [ currentHeroName, setCurrentHeroName ] = React.useState(heroName);
  const isSubmitBtnDisabled = displayText !== '' || currentHeroName === '' || gender === '' 
                              || (currentFirstName === '' && currentLastName === '');
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

  const handleLink = async () => {
    await saveNames();
    await handleHeroName(currentHeroName.toUpperCase());
  };

  return (
    <div className="name-generator-container">
      <h2>{locale[language].heroNameMessage}</h2>
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
              <h3>{locale[language][displayText]}</h3>
              <div className="progress"></div>
            </>
          ) 
          :
          (
            <label htmlFor="heroName">
              <input 
                placeholder={locale[language].createHeroName}
                type="text" 
                value={currentHeroName} 
                id="heroName" 
                name="heroName"
                disabled={isGenerateBtnDisabled}
                onChange={e => setCurrentHeroName(e.target.value)}
              />
            </label>
          )
        }
      <div className="navigation-bar">
        <Link to="/persona">{`< ${locale[language].back}`}</Link>
        {
          isSubmitBtnDisabled ? null :
          (
            <Link 
              to='/superhero-name'
              id='submit'
              onClick={handleLink}
              disabled={isSubmitBtnDisabled}
            >
              {`${locale[language].submit} >`}
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default NameGenerator;
