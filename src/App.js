import * as React from 'react';
import './App.css';
import Header from './components/Header';
import NameGenerator from './components/NameGenerator';
import GenderSelector from './components/Gender';
import LanguageSelector from './components/Languages';
import EnterName from './components/EnterName';

function App() {

  const [gender, setGender] = React.useState('neutral');
  const [prefix, setPrefix] = React.useState('');
  const [suffix, setSuffix] = React.useState('');
  const [language, setLanguage] = React.useState('english');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const handlePrefix = (name) => {
    setPrefix(name);
  }

  const handleSuffix = (name) => {
    setSuffix(name);
  }

  const handleGenderSelection = (e) => {
    setGender(e.target.value);
  }

  const handleLanguageSelector = (e) => {
    setLanguage(e.target.value);
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
  }

  return (
    <div className="App">
      <Header/>
      <LanguageSelector handleLanguageSelector={handleLanguageSelector}/>
      <GenderSelector handleGenderSelection={handleGenderSelection} language={language}/>
      <EnterName handleFirstName={handleFirstName} handleLastName={handleLastName} firstName={firstName} lastName={lastName} language={language}/>
      <NameGenerator handlePrefix={handlePrefix} handleSuffix={handleSuffix} gender={gender} language={language} prefix={prefix} suffix={suffix}/>
    </div>
  );
}

export default App;
