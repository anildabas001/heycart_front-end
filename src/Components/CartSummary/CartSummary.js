import React from 'react';
import classes from './CartSummary.module.css';

const CartSummarySection = (props) => {
    return(
        <div className={classes.CartSummarySection}>
            <h4>Cart Summary</h4>
            <div className={classes.SummaryBox}>
                <div><p className={classes.Point}>Items in Cart</p><p className={classes.Value}>{props.totalQuantity}</p></div>
                <div><p className={classes.Point}>Sub total</p><p className={classes.Value}>{props.symbol}{props.totalPrice}</p></div>
                <div><p className={classes.Point}>Delivery Fee</p><p className={classes.Value}>{props.symbol}0</p></div>
                <div style={{fontWeight: 400}}><p className={classes.Point}>Total Amount</p><p className={classes.Value}>{props.symbol}{props.totalPrice}</p></div>
                
            </div>
        </div>
    );
}

export default CartSummarySection;