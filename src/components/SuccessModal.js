import { React, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import * as htmlToImage from 'html-to-image';
import locale from '../Data/language.json';
import './SuccessModal.scss';
import SpeechBubble from './SpeechBubble';
import Bubble from '../assets/speech_bubble_2.png';
const download = require('downloadjs')

const SuccessModal = (props) => {
    const { returnToHomePage, language, firstName, lastName, heroName, reset } = props;
    const superheroName = useRef(null);

    useEffect(()=> {
      console.log('hero', superheroName);
      console.log('heroname', superheroName.current);
      console.log(firstName, 'first');
      console.log(lastName, 'last');
      console.log(heroName, 'hero');
    })

    
    const onCapture = () => {
      console.log(superheroName.current, 'current');
      htmlToImage.toPng(superheroName.current)
        .then(function (dataUrl) {
          download(dataUrl, 'my-superhero-name.png');
        });
    }
    
   

    return (
      <div className="superheroName success-modal">
        <div ref={superheroName} className="heroNameDiv">
          <SpeechBubble 
            imgSrc={Bubble} 
            text={`${firstName} ${lastName}`} 
            text2="aka" 
            text3={heroName}/> 
        </div>
      
          <Button onClick={()=> {onCapture(superheroName)}}>Download</Button>
          <Button onClick={()=> {returnToHomePage(); reset()}}>
              Return to homepage
          </Button>
        </div>
    );
};

export default SuccessModal;
