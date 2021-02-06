import React from 'react';
import classes from './CategoryCard.module.css';

const CategoryCard = (props) => {
    return (
        <div className={classes.CategoryCard}>
            <div className={classes.CategoryImage}>
                <img src={props.source} alt={props.description}/>
            </div>
            <p className={classes.CategoryLabel}>{props.label}</p>
        </div>
    );
}

export default CategoryCard;