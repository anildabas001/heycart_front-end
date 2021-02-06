import React from 'react';
import * as ReactIcons from 'react-icons/ai'
import Button from '../Button/Button';
import classes from './ProductCard.module.css';

const ProductCard = (props) => {
    let priceValue =  <span className={classes.Mrp}>Price: ${props.product.mrp.value}</span>

    if(props.product.discount > 0) {
        priceValue = <>Price: <span className={[classes.MrpPrice, classes.Invalid].join(' ')}> ${props.product.mrp.value}</span><span className={classes.DiscountPrice}>${props.product.price.value}</span> </>;  
    }

    return(
        <div className={classes.ProductCard}>
            <div className={classes.ProductImage}>
                <img src={props.product.source} alt={props.product.name + 'image'}></img>
            </div>
            <div className={classes.ProductInfo}>
                <div className={classes.ProductName}>
                    {props.product.name}
                </div>
                <div className={classes.ProductPrice}>
                    {priceValue}
                </div> 
                <Button>Add to Cart</Button> 
                {/* <div className={classes.ProductQuantity}>
                    <ReactIcons.AiOutlineMinus />
                    <input type="text"/>
                    <ReactIcons.AiOutlinePlus />
                </div>          */}
            </div>
        </div>
    );
}

export default ProductCard;