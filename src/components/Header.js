import * as React from 'react';
import NavigationBar from './NavigationBar';
import './Header.scss';

const Header = (props) => {
    const { progress, prevProgress, setPrevProgress } = props;
    return (
        <header>
            <div className="company-name"></div>
            <div className="event-banner"></div>
            <NavigationBar 
                progress={progress}
                prevProgress={prevProgress}
                setPrevProgress={setPrevProgress}
            />
        </header>
    );
};

export default Header;
