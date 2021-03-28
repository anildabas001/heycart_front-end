import React from 'react';
import CartProductCard from './CartProductCard/CartProductCard';
import classes from './CartProductSection.module.css';


const CartProductSection = (props) => {
    return (
    <div className={classes.CartProductSection}>
        {props.products.map((product) => <CartProductCard cartProduct = {product}/>)}        
    </div>
    );
}

export default CartProductSection;