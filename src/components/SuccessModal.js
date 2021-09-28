import { React, useRef, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import locale from '../Data/language.json';
import './SuccessModal.scss';
const download = require('downloadjs')

const SuccessModal = (props) => {
    const { returnToHomePage, isModalOpen, language, firstName, lastName, heroName, reset } = props;
    const superheroName = useRef(null);

    useEffect(()=> {
      console.log('hero', superheroName);
      console.log('heroname', superheroName.current);
    })

    
    const onCapture = () => {
      console.log(superheroName.current, 'current');
      htmlToImage.toPng(superheroName.current)
        .then(function (dataUrl) {
          download(dataUrl, 'my-superhero-name.png');
          console.log(dataUrl);
        });
    }
    

    return (
      <div className="superheroName success-modal">
        <div ref={superheroName} className="heroNameDiv">
          <h2>Jon Lyn</h2>
          <p>as</p>
          <h2>super man</h2>
        </div>
      
          <button onClick={()=> {onCapture(superheroName)}}>Download</button>
          <button onClick={()=> {returnToHomePage(); reset()}}>
              Return to homepage
          </button>
        </div>
    );
};

export default SuccessModal;
