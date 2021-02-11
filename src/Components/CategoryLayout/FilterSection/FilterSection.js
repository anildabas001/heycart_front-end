import React from 'react';
import classes from './FilterSection.module.css';
import Filter from './Filter/Filter';
import Button from '../../UI/Button/Button';

const FilterSection = (props) => {
    return (
        <div className= {classes.FilterSection}>
            <p className={classes.FilterHeading}>Filters</p>
            <Filter heading='Sub-Category' filterValues={['Eggs', 'Meat']}/>
            <Filter heading='Brand' filterValues={['Tata', 'Samsung']}/>
            <Filter heading='Discount' filterValues={['more than 4 %', 'more than 10 %']}/>
            <Filter heading='Availability' filterValues={['exclude out of stock']}/>
            <Button>Apply Filters</Button>
        </div>
    );
}

export default FilterSection;