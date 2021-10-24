import * as React from 'react';
import Button from '@material-ui/core/Button';
import superheroNames from '../Data/superhero_names.json';
import locale from '../Data/locales.json';
import { Link } from 'react-router-dom';
import { getEnteredDescriptorAndHeroName } from './NameGeneratorHelper';
import './NameGenerator.scss';

const NameGenerator = (props) => {
  const { 
    language, 
    gender,
    descriptor,
    heroName, 
    currentFirstName,
    currentLastName,
    handleDescriptor,
    handleHeroName,
    saveNames,
    setIsGenerateButtonClicked
  } = props;
  
  const [ counter, setCounter ] = React.useState(-1);
  const [ displayText, setDisplayText ] = React.useState('');
  const [ currentHeroName, setCurrentHeroName ] = React.useState(heroName);
  const [ currentDescriptor, setCurrentDescriptor ] = React.useState(descriptor);
  const [ hasChangedHeroName, setHasChangedHeroName ] = React.useState(false);

  const isSubmitBtnDisabled = displayText !== '' || gender === '' || currentHeroName === '' ||
                              currentFirstName === '' || currentLastName === '';
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
    const listedDescriptor = superheroNamesArr[index1][`Descriptor.${sex}`];
    const listedHeroName = superheroNamesArr[index2][`Title.${sex}`];
    setIsGenerateButtonClicked(true);
    saveNames();
    handleDescriptor(`${listedDescriptor.toUpperCase()}`)
    handleHeroName(`${listedHeroName}`.toUpperCase());
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
    if (hasChangedHeroName) {
      handleHeroName(currentHeroName.trim().toUpperCase());
      handleDescriptor('');
    }
  };

  const handleOnBlur = async (e) => {
    const enteredName = e.target.value.trim();
    if (currentFirstName || currentLastName) {
      await saveNames();
    }
    const { enteredDescriptor, enteredHeroName } = getEnteredDescriptorAndHeroName(enteredName);
    setCurrentDescriptor(enteredDescriptor);
    setCurrentHeroName(enteredHeroName);
    await handleDescriptor(enteredDescriptor.toUpperCase());
    await handleHeroName(enteredHeroName.toUpperCase());
    setIsGenerateButtonClicked(true);
  };

  const handleChangeHeroName = (e) => {
    setCurrentHeroName(e.target.value);
    if (e.target.value.trim() != `${descriptor} ${heroName}`) {
      setHasChangedHeroName(true);
    } else {
      setHasChangedHeroName(false);
    }
  };

  const handleOnFocus = (e) => {
    setCurrentHeroName(e.target.value.trim());
    setCurrentDescriptor('');
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
                value={`${currentDescriptor}${currentDescriptor ? ' ' : ''}${currentHeroName}`} 
                id="heroName" 
                name="heroName"
                disabled={isGenerateBtnDisabled}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChange={handleChangeHeroName}
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
