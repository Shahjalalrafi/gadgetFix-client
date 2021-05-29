import React from 'react';
import Categories from '../Categories/Categories';
import HeroSecetion from '../HeroSection/HeroSecetion';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSecetion />
            <Categories />
            <Services />
            <Support />
        </div>
    );
};

export default Home;