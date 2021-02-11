import React from 'react';
import ImageSection from '../../Components/ImageSection/ImageSection';
import DealSection from '../../Components/DealSection/DealSection';
import CategorySection from '../../Components/CategorySection/CategorySection';
import AboutSection from '../../Components/AboutSection/AboutSection';

const Home = (props) => {
    console.log(props);
    console.log(props.route);
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