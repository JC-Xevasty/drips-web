import React from 'react';

import HomeAbout from '../components/home/home-about';
import LatestEvents from '../components/home/latest-events';
import Questions from '../components/home/questions';
import HomeSlider from '../components/home/home-slider';

function useTitle(title) {
    React.useEffect(() => {
        const prevTitle = document.title;
        document.title = title;

        return () => {
            document.title = prevTitle;
        };
    }, []);
}

const HomePage = () => {
    useTitle("DRCNAI");

    return (
        <div className="home">
            <HomeSlider />
            <HomeAbout />
            <LatestEvents />
            <Questions />
        </div>
    );
}

export default HomePage;