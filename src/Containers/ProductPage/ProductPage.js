import React, { useEffect, useState } from 'react';
import ProductPageContainer from '../../Components/ProductPageContainer/ProductPageContainer';
import ProductImageSection from '../../Components/ProductPageContainer/ProductImageSection/ProductImageSection';
import ProductDetailSection from '../../Components/ProductPageContainer/ProductDetailSection/ProductDetailSection';
import ProductDescription from '../../Components/ProductPageContainer/ProductDescription/ProductDescription';
import {useLocation} from "react-router-dom";
import Loader from '../../Components/UI/Loader/Loader';

const ProductPage = (props) => {
    let [loader, setLoader] = useState(true);
    let data = useLocation();
    let productId = data.state.id;

    const [productData, updateProductData] = useState({}); 

    useEffect(() => {
        fetch(`http://localhost:3001/heyCart/api/v1/products/${productId}`)
        .then(response => response.json())
        .then(productdata => {updateProductData(productdata.data[0]); setLoader(false); console.log(productdata.data[0])})
    }, [productId])

    return(
        <>
            {
                loader ? <Loader /> : 
                <ProductPageContainer>
                    <ProductImageSection imageSource={productData.primaryImage} productName={productData.name} />
                    <ProductDetailSection product={productData}/>
                    <ProductDescription description={productData.description}/>
                </ProductPageContainer>
            }
        </>        
    );
}

export default ProductPage;
