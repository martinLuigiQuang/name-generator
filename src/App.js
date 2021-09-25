import * as React from 'react';
import firebase from './firebaseConfig/firebaseConfig';
import { getDatabase, ref, push } from 'firebase/database';
import axios from 'axios';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import NameGenerator from './components/NameGenerator';
import GenderSelector from './components/Gender';
import LanguageSelector from './components/Languages';
import EnterName from './components/EnterName';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as htmlToImage from 'html-to-image';
import './App.scss';
require('dotenv').config();

const sheetsUrl = process.env.REACT_APP_SHEETSURL;
// const download = require('downloadjs')

function App() {
  const DB_REF = ref(getDatabase(firebase));
  const [gender, setGender] = React.useState('');
  const [heroName, setHeroName] = React.useState('');
  const [language, setLanguage] = React.useState('english');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [progress, setProgress] = React.useState([true, false, false, false, false])
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
  
  const handleSubmit = () => {
    if (!heroName || (!firstName && !lastName)) {
      return null;
    }
    setIsModalOpen(true);
    const requestBody = {
      language,
      gender,
      firstName,
      lastName,
      heroName,
      timeStamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    };
    postData(requestBody);
  };

  // const onCapture = (id) => {
  //   htmlToImage.toPng(document.getElementById(id))
  //     .then(function (dataUrl) {
  //       download(dataUrl, 'my-superhero-name.png');
  //     });

  //     console.log(document.getElementById(id), 'element')
  // }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={`App ${isModalOpen ? 'modal-open' : ''}`}>
        <Header 
          progress={progress}
          prevProgress={prevProgress}
          firstName={firstName}
          lastName={lastName}
          gender={gender}
        />
        <Route exact path="/" component={() => 
          <LandingPage 
            progress={progress}
            setProgress={setProgress}
            setPrevProgress={setPrevProgress}
          />
        }/>
        <Route path="/origin" component={() =>
          <LanguageSelector
            language={language}
            handleLanguageSelector={handleLanguageSelector}
            progress={progress}
            setProgress={setProgress}
            setPrevProgress={setPrevProgress}
          />
        }/>
        <Route path="/persona" component={() =>
          <GenderSelector 
            handleGenderSelection={handleGenderSelection} 
            language={language}
            gender={gender}
            progress={progress}
            setProgress={setProgress}
            setPrevProgress={setPrevProgress}
          />
        }/>
        <Route path="/secret-identity" component={() =>
          <EnterName 
            handleFirstName={handleFirstName} 
            handleLastName={handleLastName} 
            language={language}
            firstName={firstName}
            lastName={lastName}
            progress={progress}
            setProgress={setProgress}
            setPrevProgress={setPrevProgress}
          />
        }/>
        <Route path="/code-name" component={() => 
          <NameGenerator 
            handleHeroName={handleHeroName}
            gender={gender} 
            language={language} 
            heroName={heroName}
            firstName={firstName}
            lastName={lastName}
            handleSubmit={handleSubmit}
            returnToHomePage={returnToHomePage}
            isModalOpen={isModalOpen}
            reset={reset}
            progress={progress}
            setProgress={setProgress}
            setPrevProgress={setPrevProgress}
            // onCapture={onCapture}
          />
        }/>
      </div>
    </Router>
  );
};

export default App;
