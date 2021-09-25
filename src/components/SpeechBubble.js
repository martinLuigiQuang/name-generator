import * as React from 'react';
import './SpeechBubble.scss';

const SpeechBubble = (props) => {
    const { text, imgSrc } = props;
    return (
        <div className="speech-bubble">
            <img src={imgSrc} alt="speech bubble"/>
            <h2>{text}</h2>
        </div>
    );
};

export default SpeechBubble;
