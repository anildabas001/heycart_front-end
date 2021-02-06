import React from 'react';
import Section from '../UI/Section/Section';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import CategoryCard from '../UI/CategoryCard/CategoryCard';
import fruitsVeg from '../../Assets/fruitsVeg.jpg';
import beverages from '../../Assets/beverages.jpg';
import eggs from '../../Assets/egg_cat.jpg';
import breadDairy from '../../Assets/bread-dairy.jpg';
import classes from './CategorySection.module.css';

const CategorySection = (props) => {
    return(
        <Section>
            <SectionHeading>
                Popular Categories
            </SectionHeading>
            <div className={classes.CategoryContainer}>
                <CategoryCard source={fruitsVeg} label='Fruits & Vegetables' description='Fruits and Vegetables images' />
                <CategoryCard source={beverages} label='Beverages' description='Beverages images' />
                <CategoryCard source={eggs} label='Eggs' description='Eggs images' />
                <CategoryCard source={breadDairy} label='Bread & Dairy' description='Bread and Dairy images' />
            </div>            
        </Section>
    );
}

export default CategorySection;