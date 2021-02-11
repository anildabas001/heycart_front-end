import React from 'react';
import classes from './Filter.module.css';

const Filter = (props) => {
    return (<section data-id={props.Heading} className={classes.Filter}>
        <p className={classes.Heading}>{props.heading}</p>
        {props.filterValues.map((value) => {
            return (
                <div className={classes.filterField}>
                    <input id={value} name={props.heading} type='checkbox' />
                    <label htmlFor={value}>{value}</label>
                </div>
            );
        })}
    </section> 
    );
}

export default Filter;