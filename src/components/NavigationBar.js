import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

const LINKS = ['/', '/origin', '/persona', '/secret-identity', '/code-name'];
const CHAPTERS = ['', '1', '2', '3', '4'];

const NavigationBar = (props) => {
    const { progress, prevProgress } = props;
    const readingProgress = progress.reduce(
        (acc, cur) => {
            return acc += cur ? 1 : 0;
        },
        0
    );
    console.log(prevProgress, readingProgress)
    return (
        <>
            <div className={`progress-bar progress-${readingProgress}${prevProgress === readingProgress ? '-back' : ''}`}></div>
            <div className="chapters-container">
                {
                    progress.map((isAtChapter, index) => {
                        return (
                            <Link to={LINKS[index]}>
                                <div className={isAtChapter ? 'visited' : 'remaining'} key={index}>
                                    <p>{CHAPTERS[index]}</p>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </>
    );
};

export default NavigationBar;
