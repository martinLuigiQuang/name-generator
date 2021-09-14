import * as React from 'react';
import './App.css';
import Header from './components/Header';
import NameGenerator from './components/NameGenerator';
import GenderSelector from './components/Gender';

function App() {

  const [gender, setGender] = React.useState('neutral');
  const [prefix, setPrefix] = React.useState('');
  const [suffix, setSuffix] = React.useState('');

  const handlePrefix = (name) => {
    setPrefix(name);
  }

  const handleSuffix = (name) => {
    setSuffix(name);
  }

  const handleGenderSelection = (e) => {
    setGender(e.target.value);
  }

  return (
    <div className="App">
      <Header/>
      <GenderSelector handleGenderSelection={handleGenderSelection}/>
      <NameGenerator handlePrefix={handlePrefix} handleSuffix={handleSuffix} gender={gender}/>
    </div>
  );
}

export default App;
