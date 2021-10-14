import { React, useRef } from 'react';
import Button from '@material-ui/core/Button';
import * as htmlToImage from 'html-to-image';
import locale from '../Data/locales.json';
import './SuccessModal.scss';
import SpeechBubble from './SpeechBubble';
import Bubble from '../assets/speech_bubble_2.png';
import Invincible from '../assets/Invincible Word Mark.png';
const download = require('downloadjs')

const SuccessModal = (props) => {
    const { returnToHomePage, language, firstName, lastName, heroName, reset } = props;
    const superheroName = useRef(null);
    
    const onCapture = () => {
      superheroName.current.setAttribute('style', 'width: 1000px');
      htmlToImage.toPng(superheroName.current)
        .then(function (dataUrl) {
          superheroName.current.setAttribute('style', 'width: 0px');
          download(dataUrl, 'my-superhero-name.png');
        });
    }

    return (
      <div className="superheroName success-modal">
        <div ref={superheroName} className="heroNameDiv">
          <img src={Invincible} alt="invincible" id="invincible"/>
          <SpeechBubble 
            imgSrc={Bubble} 
            text={`${firstName} ${lastName}`} 
            text2="aka" 
            text3={heroName}/> 
        </div>
        <Button onClick={onCapture}>
          {locale[language]['DOWNLOAD']}
        </Button>
        <Button onClick={()=> {
          returnToHomePage(); 
          reset()
        }}>
          {locale[language]['RETURN TO HOMEPAGE']}
        </Button>
      </div>
    );
};

export default SuccessModal;
