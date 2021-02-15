import React from 'react';
import * as ReactIcons from 'react-icons/ai'
import Button from '../Button/Button';
import classes from './ProductCard.module.css';

const ProductCard = (props) => {

    const filterPrice = (price) => {
        return price.toFixed(2);
    }

    const filterName = (name) => {
        if(name.length < 16) {
            return name;
        }
        else {
            let nameArray = name.split();
            let updatedName = nameArray.slice(-16).join('') + '...';
            return updatedName;
        }
    }



    let priceValue =  <span className={classes.Mrp}>Price: ${filterPrice(props.product.mrp.value)}</span>

    if(props.product.discount > 0) {
        priceValue = <>Price: <span className={[classes.MrpPrice, classes.Invalid].join(' ')}> ${filterPrice(props.product.mrp.value)}</span><span className={classes.DiscountPrice}>${filterPrice(props.product.price.value)}</span> </>;  
    }

    return(
        <div className={classes.ProductCard}>
            <div className={classes.ProductImage}>
                <img src={`http://localhost:3001/images/${props.product.source}`} alt={props.product.name + 'image'}></img>
                <p className={classes.ProductName}>
                    {filterName(props.product.name)}
                </p>
            </div>
            <div className={classes.ProductInfo}>                
                <p className={classes.ProductPrice}>
                    {priceValue}
                </p>
                <p className={classes.ProductQuantity}>
                    Quantity:{ props.product.quantity.value}{props.product.quantity.unit}
                </p>
                {props.product.stockQuantity <= 0 ? <p className={classes.stockOut}>Out of Stock</p> : <Button>Add to Cart</Button>}                
                {/* <div className={classes.ProductQuantityControl}>
                    <ReactIcons.AiOutlineMinus />
                    <input type="text"/>
                    <ReactIcons.AiOutlinePlus />
                </div>            */}
            </div>
        </div>
    );
}

export default ProductCard;