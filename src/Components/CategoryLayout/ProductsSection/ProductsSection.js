import React, {memo} from 'react';
import classes from './ProductsSection.module.css';
import ProductCard from '../../UI/ProductCard/ProductCard';

const ProductsSection = (props) => {

    return (
        <div className= {classes.ProductsSection}>
            <p className={classes.ProductHeading}>{props.pageHeading}</p>
            <div className={classes.productList}>
            {props.productList.map(product => <ProductCard key ={product.id} product={{
                    name: product.name,
                    mrp: product.mrp,
                    price: product.price,
                    discount: product.discountPercentage,
                    images: product.images,
                    id: product.id,
                    quantity: product.quantity,
                    stockQuantity: product.stockQuantity,

                }}/>)}

                {/* {props.newProductCount >= props.productLimit ? <div style={{clear: 'both', textAlign: 'center'}}>
                        <p onClick={props.loadMoreHandler} className={classes.LoadText}>Load More</p>
                    </div> : null
                }                        */}
            </div>
        </div>
    );
}

export default memo(ProductsSection);
