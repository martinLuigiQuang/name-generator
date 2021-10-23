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
  const hasNoFirstName = !firstName && !currentFirstName;
  const hasNoLastName = !lastName && !currentLastName;

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
            <input 
              type="text" 
              id="firstName" 
              value={currentFirstName} 
              onChange={saveCurrentFirstName}
              onBlur={saveNames} 
              placeholder={locale[language]['FIRST NAME']}
            />
          </label>
          <label htmlFor="lastName">
            <input 
              type="text" 
              id="lastName" 
              value={currentLastName} 
              onChange={saveCurrentLastName}
              onBlur={saveNames} 
              placeholder={locale[language]['LAST NAME']}
              />
          </label>
          {
            isGenerateButtonClicked && (hasNoFirstName || hasNoLastName) ?
              <p style={{color: 'red'}}>{`*${locale[language]["PLEASE ENTER YOUR FIRST AND LAST NAME TO CONTINUE"]}`}</p> :
              <p style={{opacity: 0 }}>{`*${locale[language]["PLEASE ENTER YOUR FIRST AND LAST NAME TO CONTINUE"]}`}</p>
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
