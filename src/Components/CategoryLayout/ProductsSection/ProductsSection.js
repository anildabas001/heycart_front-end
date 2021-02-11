import React from 'react';
import classes from './ProductsSection.module.css';
import ProductCard from '../../UI/ProductCard/ProductCard';

const ProductsSection = (props) => {
   
    return (
        <div className= {classes.ProductsSection}>
            <p className={classes.ProductHeading}>{props.pageHeading}</p>
            <div className={classes.productList}>
            <ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 10
                    },
                    discount: 0,
                    source: 'egg'
                }}/>

<ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 10
                    },
                    discount: 0,
                    source: 'egg'
                }}/>    

<ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 10
                    },
                    discount: 0,
                    source: 'egg'
                }}/>

<ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 10
                    },
                    discount: 0,
                    source: 'egg'
                }}/>

<ProductCard product={{
                    name: 'Tata Salt',
                    mrp: {
                        symbol: '$',
                        value: 10
                    },
                    price: {
                        symbol: '$',
                        value: 10
                    },
                    discount: 0,
                    source: 'egg'
                }}/>
            </div>
        </div>
    );
}

export default ProductsSection;