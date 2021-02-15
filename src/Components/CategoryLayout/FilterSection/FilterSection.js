import React from 'react';
import classes from './FilterSection.module.css';
import Filter from './Filter/Filter';
import Button from '../../UI/Button/Button';

const FilterSection = (props) => {
    return (
        <div className= {classes.FilterSection}>
            <p className={classes.FilterHeading}>Filters</p>
            {props.filter.map((filterElement) => <Filter key={filterElement.heading} heading={filterElement.heading} filterValues={filterElement.options}/>)}            
            <Button>Apply Filters</Button>
        </div>
    );
}

export default FilterSection;