import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as htmlToImage from 'html-to-image';
import locale from '../Data/locales.json';
import './SuccessModal.scss';
import SpeechBubble from './SpeechBubble';
import Bubble from '../assets/speech_bubble_4.png';
import InvincibleEnglish from '../assets/Invincible_english.png';
import InvincibleSpanish from '../assets/Invincible_spanish.png';
import InvinciblePortuguese from '../assets/Invincible_portuguese.png';
const download = require('downloadjs');

const IMAGE = {
    english: InvincibleEnglish,
    spanish: InvincibleSpanish,
    portuguese: InvinciblePortuguese
};

const getImage = (language) => {
    return IMAGE[language];
};

const SuccessModal = (props) => {
    const { returnToHomePage, language, firstName, lastName, descriptor, heroName, handleSubmit, setIsFirstPage } = props;
    const [ isFirstSubmit, setIsFirstSubmit ] = React.useState(true);
    const superheroName = React.useRef(null);

    React.useEffect(() => setIsFirstPage(true), []);

    const capture = () => {
      if (isFirstSubmit) {
        setIsFirstSubmit(false);
        handleSubmit();
      }
      htmlToImage.toSvg(superheroName.current).then(function (dataUrl) {
        download(dataUrl, 'my-superhero-name');
      });
    };

    return (
      <div className="success-modal-container">
        <div ref={superheroName} className="superheroName success-modal">
          <div className="heroNameDiv">
            <img src={getImage(language)} alt="invincible" id="invincible"/>
            <SpeechBubble 
              imgSrc={Bubble} 
              text={`${firstName} ${lastName}`} 
              text2="AKA"
              text3={descriptor}
              text4={heroName}
            /> 
          </div>
        </div>
        <div className="buttons-container">
          <Button onClick={capture} className="page4-button">
            {locale[language]['DOWNLOAD']}
          </Button>
          <Button onClick={returnToHomePage} className="page4-button">
            {locale[language]['RETURN TO HOMEPAGE']}
          </Button> 
        </div>
      </div>
    );
};

export default SuccessModal;
