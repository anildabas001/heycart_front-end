import React from 'react';
import ProductCard from '../UI/ProductCard/ProductCard';
import Section from '../UI/Section/Section';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import classes from './DealSection.module.css';
import ProductSlider from '../UI/ProductSlider/ProductSlider';
import egg from '../../Assets/egg_cat.jpg'

const DealSection = (props) => {    

    return (
        <Section className={classes.DealSection}>
            <SectionHeading>HeyCart Deals</SectionHeading>
            <ProductSlider>            
                <ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 10
                    },
                    discount: 0,
                    source: egg
                }}/>
                <ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 5
                    },
                    discount: 50,
                    source: egg
                }}
                />
                <ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 5
                    },
                    discount: 50,
                    source: egg
                }}
                />
                <ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 5
                    },
                    discount: 50,
                    source: egg
                }}
                />
                <ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 5
                    },
                    discount: 50
                }}
                />
            </ProductSlider>
        </Section>
    );
}

export default DealSection;