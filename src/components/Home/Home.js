import React from 'react';
import Services from '../Services/Services';
import BottomBanner from './BottomBanner/BottomBanner';
import TopBanSlider from './TopBanSlider/TopBanSlider';

const Home = () => {
    return (
        <div>
            <TopBanSlider></TopBanSlider>
            <Services></Services>
            <BottomBanner></BottomBanner>
        </div>
    );
};

export default Home;