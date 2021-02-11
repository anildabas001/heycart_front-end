import React from 'react';
import CategoryLayout from '../../Components/CategoryLayout/CategoryLayout';
import FilterSection from '../../Components/CategoryLayout/FilterSection/FilterSection'; 
import ProductsSection from '../../Components/CategoryLayout/ProductsSection/ProductsSection';

const Category = (props) => {
    const pageHeading = props.match.params.category;
  return (
  <>
    <CategoryLayout>
        <FilterSection />
        <ProductsSection pageHeading={pageHeading}/> 
    </CategoryLayout>  
  </>)
};

export default Category;