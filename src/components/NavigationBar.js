import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

const LINKS = ['/', '/persona', '/secret-identity'];
const CHAPTERS = ['1', '2', '3'];

const NavigationBar = (props) => {
    const { progress, firstName, lastName, gender } = props;
    const hasNames = firstName !== '' || lastName !== '';
    const hasGender = gender !== '';
    const readingProgress = progress.reduce(
        (acc, cur) => {
            return acc += cur ? 1 : 0;
        },
        0
    );
    return (
        <>
            <div className={`progress-bar progress-${readingProgress}`}></div>
            <div className="chapters-container">
                {
                    progress.map((isAtChapter, index) => {
                        return (
                            (index === 4 && !hasGender) || (index === 3 && !hasNames) ?
                            (
                                <div className="remaining locked" key={index}>
                                    <p>{CHAPTERS[index]}</p>
                                </div>
                            ) :
                            (
                                <Link to={LINKS[index]} key={index}>
                                    <div className={isAtChapter ? 'visited' : 'remaining'}>
                                        <p>{CHAPTERS[index]}</p>
                                    </div>
                                </Link>
                            )
                        );
                    })
                }
            </div>
        </>
    );
};

export default NavigationBar;
