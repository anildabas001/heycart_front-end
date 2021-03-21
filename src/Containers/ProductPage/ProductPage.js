import classes from 'ProductPage.module.css';
import React from 'react';

const ProductPage = (props) => {
    return(
        <div className={classes.ProductPage}>
            <ProductImageSection />
            <ProductDetailSection />
            <ProductDescription />
        </div>
    );
}

export default ProductPage;
