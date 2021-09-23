import * as React from 'react';
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
        <div className="landing-page-container">
            <div>
                <h2>The beginning</h2>
            </div>
            <h1>SUPERHEROES</h1>
        </div>
    );
};

export default LandingPage;
