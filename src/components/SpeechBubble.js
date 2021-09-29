import * as React from 'react';
import './SpeechBubble.scss';

const SpeechBubble = (props) => {
    const { text, imgSrc, text2, text3 } = props;
    return (
        <div className="speech-bubble">
            <img src={imgSrc} alt="speech bubble"/>
            <h2>{text}</h2>
            <p>{text2}</p>
            <h2>{text3}</h2>
        </div>
    );
};

export default SpeechBubble;
