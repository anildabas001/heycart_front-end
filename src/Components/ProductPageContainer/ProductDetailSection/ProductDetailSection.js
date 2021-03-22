import React from 'react';
import classes from './ProductDetailSection.module.css';
import Button from '../../UI/Button/Button';

const ProductDetailSection = (props) => {

    let priceElement = <p className={classes.MrpText}> MRP: {`${props.product.mrp.symbol} ${props.product.mrp.value}`}</p>;

     if(props.product.price.value <  props.product.mrp.value) {
         priceElement = <div className={classes.PriceDetails}>
             <p className={classes.MrpText}><span className={classes.CrossText}>MRP: {`${props.product.mrp.symbol} ${props.product.mrp.value}`}</span></p>
             <p className={classes.DiscountClass}> Price: {`${props.product.price.symbol} ${props.product.price.value}`}</p>
         </div>
     }

    return (
        <div className={`${classes.ProductDetailSection}`}>
            <h1>{props.product.name}</h1>
            {priceElement}
            <p style={{marginTop: '5px'}}>Quantity: {`${props.product.quantity.value} ${props.product.quantity.unit}`}</p> 

            <button className={classes.PropductButton}>Add to Cart</button>

            <div className={classes.GeneralInfoSection}>
                <p className={classes.GeneralInfoHeading}>General Information</p>
                <ul>
                    <li>
                        <p><span style={{display:'inline-block', width: '30%'}}>Brand</span> <span className={classes.InfoValues}>{props.product.brand}</span></p>
                    </li>
                    <li>
                        <p><span style={{display:'inline-block', width: '30%'}}>Type</span> <span className={classes.InfoValues}>{props.product.categories[0]}</span></p>
                    </li>
                    <li>
                        <p><span style={{display:'inline-block', width: '30%'}}>Organic</span> <span className={classes.InfoValues}>{props.product.organic}</span></p>
                    </li>
                    <li>
                        <p><span style={{display:'inline-block', width: '30%'}}>Food Preferance</span> <span className={classes.InfoValues}>{props.product.foodPreferance}</span></p>
                    </li>
                    <li>
                        <p><span style={{display:'inline-block', width: '30%'}}>Items in Stock</span> <span className={classes.InfoValues}>{props.product.stockQuantity}</span></p>
                    </li>
                </ul>
            </div>
        </div>
        
    );
}

export default ProductDetailSection;