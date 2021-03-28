import React from 'react';
import classes from './CartProductCard.module.css';
import { AiOutlineClose } from "react-icons/ai";

const CartProductCard = (props) => {
    console.log(props.cartProduct)
    return (
    <div className={classes.CartProductCard}>
        <div className={classes.CardImage}>
            <img src={`http://127.0.0.1:3001/images/${props.cartProduct.product.images[0]}`} alt={`${props.cartProduct.product.images[0]} image`} />
        </div>
        <div className={classes.CardInfo}>
            <p className={classes.ProductName}>{props.cartProduct.product.name}</p>
            <p className={classes.Price}>{props.cartProduct.product.price.symbol}{props.cartProduct.product.price.value}</p>
        </div>
        <div className={classes.Quantity}>
            <p>Quantity: {props.cartProduct.quantity}</p>
        </div>
        <div>
            <AiOutlineClose />
        </div>
        
    </div>
    );
}

export default CartProductCard;