import React from 'react';
import ImageSection from '../../Components/ImageSection/ImageSection';
import DealSection from '../../Components/DealSection/DealSection';
import CategorySection from '../../Components/CategorySection/CategorySection';
import AboutSection from '../../Components/AboutSection/AboutSection';

const Home = (props) => {
    return (
        <>
            <ImageSection />
            <DealSection />
            <CategorySection />
            <AboutSection />
        </>        
    );
}

export default Home;