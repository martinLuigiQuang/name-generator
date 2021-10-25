import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as htmlToImage from 'html-to-image';
import locale from '../Data/locales.json';
import './SuccessModal.scss';
import SpeechBubble from './SpeechBubble';
import Bubble from '../assets/speech_bubble_4.png';
// import Invincible from '../assets/Invincible_english.png';
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

    React.useEffect(() => setIsFirstPage(false), []);

    const capture = () => {
      if (isFirstSubmit) {
        setIsFirstSubmit(false);
        handleSubmit();
      }
      superheroName.current.setAttribute('style', 'width: 1000px');
      htmlToImage.toPng(superheroName.current).then(function (dataUrl) {
        superheroName.current.setAttribute('style', 'width: 0px');
        download(dataUrl, 'my-superhero-name.png');
      });
    };

    return (
      <div className="superheroName success-modal">
        <div ref={superheroName} className="heroNameDiv">
          <img src={getImage(language)} alt="invincible" id="invincible"/>
          <SpeechBubble 
            imgSrc={Bubble} 
            text={`${firstName} ${lastName}`} 
            text2="AKA"
            text3={descriptor}
            text4={heroName}/> 
        </div>
        <Button onClick={capture}>
          {locale[language]['DOWNLOAD']}
        </Button>
        <Button onClick={returnToHomePage}>
          {locale[language]['RETURN TO HOMEPAGE']}
        </Button>
      </div>
    );
};

export default SuccessModal;
