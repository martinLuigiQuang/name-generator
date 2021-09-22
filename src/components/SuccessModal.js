import * as React from 'react';
import locale from '../Data/language.json';
import './SuccessModal.scss';

const SuccessModal = (props) => {
    const { returnToHomePage, isModalOpen, language, firstName, lastName, prefix, suffix, reset } = props;
    return (
        <div className={`success-modal ${isModalOpen ? '' : 'invisible'}`}>
            <h2>{firstName} {lastName}</h2>
            <h2>{prefix} {suffix}</h2>
            <p>Your selections were successfully saved</p>
            <button onClick={()=> {window.print(); reset()}}>Print Superhero name</button>
            <button onClick={()=> {returnToHomePage(); reset()}}>
                Return to homepage
            </button>
        </div>
    );
};

export default SuccessModal;
