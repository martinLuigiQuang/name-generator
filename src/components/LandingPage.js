import * as React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage = (props) => {
    const { progress, setProgress, setPrevProgress } = props;
    React.useEffect(
        () => {
            if (progress[1]) {
                setPrevProgress(1)
                setProgress([true, false, false, false, false]);
            }
        }
    );
    return (
        <div className="start-button-container">
            <Link to="/origin">
                Chapter 1: Origin
            </Link>
        </div>
    );
};

export default LandingPage;
