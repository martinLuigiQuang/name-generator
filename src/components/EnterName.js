import * as React from 'react';
import NameGenerator from './NameGenerator';
import locale from '../Data/locales.json';
import './EnterName.scss';

const EnterName = (props) => {
  const { 
    language,
    gender,
    heroName,
    handleHeroName,
    handleFirstName, 
    handleLastName, 
    firstName, 
    lastName,
    setIsFirstPage,
    isGenerateButtonClicked,
    setIsGenerateButtonClicked
  } = props;

  const [currentFirstName, setCurrentFirstName] = React.useState(firstName);
  const [currentLastName, setCurrentLastName] = React.useState(lastName);
  const hasNoNames = !firstName && !lastName && !currentFirstName && !currentLastName;

  React.useEffect(() => setIsFirstPage(false), []);

  const saveCurrentFirstName = (e) => {
    setCurrentFirstName(e.target.value);
  };

  const saveCurrentLastName = (e) => {
    setCurrentLastName(e.target.value);
  };

  const saveNames = () => {
    handleFirstName(currentFirstName.toUpperCase());
    handleLastName(currentLastName.toUpperCase());
  };
  
  return (
    <div className={`name-container ${language}`}>
      <div className="outer-box">
        <div className="task">
          <label htmlFor="firstName">
            <input type="text" id="firstName" value={currentFirstName} onChange={saveCurrentFirstName} placeholder={locale[language]['FIRST NAME']}/>
          </label>
          <label htmlFor="lastName">
            <input type="text" id="lastName" value={currentLastName} onChange={saveCurrentLastName} placeholder={locale[language]['LAST NAME']}/>
          </label>
          {
            isGenerateButtonClicked && hasNoNames ?
              <p style={{color: 'red'}}>*Please enter your first and last name</p> :
              <p style={{opacity: 0 }}>*Please enter your first and last name</p>
          }
          <NameGenerator 
            language={language}
            gender={gender}
            heroName={heroName}
            currentFirstName={currentFirstName}
            currentLastName={currentLastName}
            handleHeroName={handleHeroName}
            saveNames={saveNames}
            setIsGenerateButtonClicked={setIsGenerateButtonClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterName;
