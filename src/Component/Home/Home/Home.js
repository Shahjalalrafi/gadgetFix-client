import React from 'react';
import Categories from '../Categories/Categories';
import HeroSecetion from '../HeroSection/HeroSecetion';
import Navbar from '../Navbar/Navbar';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSecetion />
            <Categories />
            <Support />
        </div>
    );
};

export default Home;