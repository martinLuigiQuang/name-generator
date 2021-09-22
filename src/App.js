import * as React from 'react';
import firebase from './firebaseConfig/firebaseConfig';
import { getDatabase, ref, push } from 'firebase/database';
import axios from 'axios';
import Header from './components/Header';
import NameGenerator from './components/NameGenerator';
import GenderSelector from './components/Gender';
import LanguageSelector from './components/Languages';
import EnterName from './components/EnterName';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
require('dotenv').config();

console.log(process.env.REACT_APP_SHEETSURL, 'env');
const sheetsUrl = process.env.REACT_APP_SHEETSURL;
 console.log(sheetsUrl, 'sheetsurl')

function App() {
  const DB_REF = getDatabase(firebase);
  const [gender, setGender] = React.useState('');
  const [prefix, setPrefix] = React.useState('');
  const [suffix, setSuffix] = React.useState('');
  const [language, setLanguage] = React.useState('english');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = React.useState(true);

  
  React.useEffect(
    () => {
      if (prefix !== '' && suffix !== '' && (lastName !== '' || firstName !== '')) {
        setIsSubmitBtnDisabled(false);
      }
    },
    [prefix, suffix, firstName, lastName]
  );
  
  const postData = (requestBody) => {
    
    push(ref(DB_REF), requestBody);
    axios({
      url: sheetsUrl,
      method: 'POST',
      data: requestBody,
    }).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  };

  const handlePrefix = (name) => {
    setPrefix(name);
  };

  const handleSuffix = (name) => {
    setSuffix(name);
  };

  const handleGenderSelection = (e) => {
    setGender(e.target.value);
  };

  const handleLanguageSelector = (e) => {
    setLanguage(e.target.value);
  };

  const handleFirstName = (name) => {
    setFirstName(name);
  };

  const handleLastName = (name) => {
    setLastName(name);
  };

  const reset = () => {
    setFirstName('');
    setLastName('');
    setPrefix('');
    setSuffix('');
    setGender('');
    setIsModalOpen(false);
  };

  const returnToHomePage = () => {
    window.location.href = '/';
  };
  
  const handleSubmit = () => {
    if (!prefix || !suffix || (!firstName && !lastName)) {
      return null;
    }
    setIsSubmitBtnDisabled(true);
    setIsModalOpen(true);
    const requestBody = {
      language,
      gender,
      firstName,
      lastName,
      prefix,
      suffix,
      timeStamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    };
    postData(requestBody);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={`App ${isModalOpen ? 'modal-open' : ''}`}>
        <Header/>
        <Route exact path="/" component={() =>
          <LanguageSelector
            language={language}
            handleLanguageSelector={handleLanguageSelector}
          />
        }/>
        <Route path="/gender" component={() =>
          <GenderSelector 
            handleGenderSelection={handleGenderSelection} 
            language={language}
            gender={gender}
          />
        }/>
        <Route path="/name" component={() =>
          <EnterName 
            handleFirstName={handleFirstName} 
            handleLastName={handleLastName} 
            language={language}
          />
        }/>
        <Route path="/hero-name" component={() => 
          <NameGenerator 
            handlePrefix={handlePrefix} 
            handleSuffix={handleSuffix} 
            gender={gender} 
            language={language} 
            firstName={firstName}
            lastName={lastName}
            prefix={prefix} 
            suffix={suffix}
            handleSubmit={handleSubmit} 
            isSubmitBtnDisabled={isSubmitBtnDisabled} 
            returnToHomePage={returnToHomePage}
            isModalOpen={isModalOpen}
            reset={reset}
          />
        }/>
      </div>
    </Router>
  );
};

export default App;
