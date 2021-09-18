import * as React from 'react';
import locale from '../Data/language.json';
import './SuccessModal.scss';

const SuccessModal = (props) => {
    const { returnToHomePage, isModalOpen, language } = props;
    return (
        <div className={`success-modal ${isModalOpen ? '' : 'invisible'}`}>
            <p>Your selections were successfully saved</p>
            <button onClick={returnToHomePage}>
                Return to homepage
            </button>
        </div>
    );
};

export default SuccessModal;
