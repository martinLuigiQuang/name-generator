import * as React from 'react';
import firebase from './firebaseConfig/firebaseConfig';
import { getDatabase, ref, push } from 'firebase/database';
import axios from 'axios';
import Header from './components/Header';
import GenderSelector from './components/Gender';
import LanguageSelector from './components/Languages';
import EnterName from './components/EnterName';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SuccessModal from './components/SuccessModal';
import './App.scss';
require('dotenv').config();

const sheetsUrl = process.env.REACT_APP_SHEETSURL;

function App() {
  const DB_REF = ref(getDatabase(firebase));
  const [gender, setGender] = React.useState('');
  const [heroName, setHeroName] = React.useState('');
  const [language, setLanguage] = React.useState('english');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [progress, setProgress] = React.useState([true, false, false])
  const [prevProgress, setPrevProgress] = React.useState(0);
  
  
  const postData = (requestBody) => {
    push(DB_REF, requestBody);
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

  const handleHeroName = (name) => {
    setHeroName(name);
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
    setHeroName('');
    setGender('');
    setIsModalOpen(false);
  };

  const returnToHomePage = () => {
    window.location.href = '/';
  };

  const toSuccessModal = () => {
    window.location.href = '/superhero-name';
  };
  
  const handleSubmit = () => {
    
    if (!heroName || (!firstName && !lastName)) {
      return null;
    }
    const requestBody = {
      language,
      gender,
      firstName,
      lastName,
      heroName,
      timeStamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    };
    postData(requestBody);
    console.log('here');
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={'App'}>
        <Header />
        <Route exact path="/" component={() =>
          <LanguageSelector
            language={language}
            handleLanguageSelector={handleLanguageSelector}
            progress={progress}
            setProgress={setProgress}
          />
        }/>
        <Route path="/persona" component={() =>
          <GenderSelector 
            handleGenderSelection={handleGenderSelection} 
            language={language}
            gender={gender}
            progress={progress}
            setProgress={setProgress}
          />
        }/>
        <Route path="/secret-identity" component={() =>
          <EnterName 
            handleFirstName={handleFirstName} 
            handleLastName={handleLastName} 
            language={language}
            gender={gender} 
            firstName={firstName}
            lastName={lastName}
            heroName={heroName}
            progress={progress}
            setProgress={setProgress}
            handleSubmit={handleSubmit}
            handleHeroName={handleHeroName}
          />
        }/>
        <Route path="/superhero-name" component={() =>
          <SuccessModal 
            firstName={firstName}
            lastName={lastName}
            heroName={heroName}
          />
        }/>
      </div>
    </Router>
  );
};

export default App;
