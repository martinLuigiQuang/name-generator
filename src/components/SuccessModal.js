import { React, useRef, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import locale from '../Data/language.json';
import './SuccessModal.scss';
const download = require('downloadjs')

const SuccessModal = (props) => {
    const { returnToHomePage, isModalOpen, language, firstName, lastName, heroName, reset } = props;
    const superheroName = useRef(null);

    useEffect(()=> {
      console.log('heroname', superheroName.current);
    })

    
  const onCapture = () => {
    console.log(superheroName.current, 'current');
    htmlToImage.toPng(superheroName.current)
      .then(function (dataUrl) {
        download(dataUrl, 'my-superhero-name.png');
      });

    // console.log(document.getElementById('id'))
  }
    

    return (
      <div className={`superheroName success-modal ${isModalOpen ? '' : 'invisible'}`}>

            <h2 ref={superheroName} id="test">{firstName} {lastName}</h2>
            <h2>{heroName}</h2>
    
            <p>Your selections were successfully saved</p>
            <button onClick={()=> {onCapture(superheroName)}}>Save Superhero name</button>
            <button onClick={()=> {returnToHomePage(); reset()}}>
                Return to homepage
            </button>
        </div>
    );
};

export default SuccessModal;
