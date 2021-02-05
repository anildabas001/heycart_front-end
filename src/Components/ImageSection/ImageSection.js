import React from 'react';
import groceryImage from '../../Assets/grocery-1.jpg'
import classes from './ImageSection.module.css';

const ImageSection = (props) => {
    return (
        <section className={classes.ImageSection}>
            <div className={classes.imageContainer}>
                <img src={groceryImage}/>
                <h1  className={classes.heroText}>Fill your Basket with Happiness!!</h1>
            </div>
        </section>
    );
}

export default ImageSection;