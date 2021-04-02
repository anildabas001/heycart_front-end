import React from 'react';
import classes from './FilterSection.module.css';
import Filter from './Filter/Filter';
import Button from '../../UI/Button/Button';
import CollapsibleControl from '../../UI/CollapsibleControl/CollapsibleControl';

const FilterSection = (props) => {    
    const titleElement = <p className={classes.FilterHeading}>Filters</p>;
    return (
    <>
        {
            props.productCount > 0 ? <div className= {classes.FilterSection}>
                <form onSubmit={props.filterFormHandler}>
                    <CollapsibleControl title={titleElement}>
                        {props.filter.map((filterElement) => <Filter key={filterElement.heading} heading={filterElement.heading} filterValues={filterElement.options}/>)}            
                        <Button >Apply Filters</Button>
                    </CollapsibleControl>
                </form>                    
            </div>          
          : null  
        }
    </>  
    );
}

export default FilterSection;