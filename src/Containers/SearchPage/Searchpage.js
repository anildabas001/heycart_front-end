import React, {useReducer, useeffect, useEffect} from 'react';
import CategoryLayout from '../../Components/CategoryLayout/CategoryLayout';
import FilterSection from '../../Components/CategoryLayout/FilterSection/FilterSection'; 
import ProductsSection from '../../Components/CategoryLayout/ProductsSection/ProductsSection';
import Loader from '../../Components/UI/Loader/Loader';
const queryString = require('query-string');

const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_LISTS': 
      return ({
        ...state,
        productList: [...action.productList],
        filter: [
          {
            heading: 'Brands',
            options: [...action.brands]
          },
          {
            heading: 'Sub-Category',
            options: [...action.subCategories]
          },
          {
            heading: 'Discount',
            options: [...action.discount]
          },
          {
            heading: 'Availability',
            options: ['exclude out of stock items']
          }
        ]
      });

      case 'STOP_LOADER':
        return(
          {
            ...state,
            loading: false
          }
        );

        case 'STAR_LOADER':
        return(
          {
            ...state,
            loading: true
          }
        );

        case 'RESET_INITIALSTATE': 
          return({
            ...action.initialCategoryState
          });
  }
  return state;
}

const Category = (props) => {
    const productToSearch = queryString.parse(props.location.search).product;
    const pageHeading = `Search results for: "${productToSearch}"`;    
    const initialCategoryState = {
      productList:[],
      filter: [
        {
          heading: 'Brands',
          options: []
        },
        {
          heading: 'Sub-Category',
          options: []
        },
        {
          heading: 'Discount',
          options: []
        },
        {
          heading: 'Availability',
          options: ['exclude out of stock items']
        }        
      ],
      loading: true
    };

    const [state, dispatch] = useReducer(categoryReducer, initialCategoryState);

    useEffect(() => {

      dispatch({type: 'RESET_INITIALSTATE', initialCategoryState});
      dispatch({type: 'START_LOADING'});

      let brands = [];
      let subCategories = [];
      let discount = [];
      let productList= [];

      const url = encodeURI(`http://localhost:3001/heyCart/api/v1/products?search=${productToSearch}&selectFields=-description,-primaryImage,-organic,-variants`);
      console.log(url);
      fetch(url)
      .then(response => response.json())
      .then(response=> {
        if (response.data.length > 0) {
          productList = [...response.data];
          response.data.forEach((item) => {  

              if (brands.indexOf(item.brand) === -1) {
                brands.push(item.brand);
              }
              
              item.categories.forEach(category => {
                if(subCategories.indexOf(category) === -1) {
                  subCategories.push(category);
                }
              });

              if (item.discountPercentage < 10) {
                 if(discount.indexOf('less than 10%') === -1) {
                   discount[5] = 'less than 10%';
                 }                  
              }
              else if(item.discountPercentage >= 10 && item.discountPercentage < 20) {
                if(discount.indexOf('less than 20%') === -1) {
                  discount[4] = 'less than 20%';
                } 
              }
              else if(item.discountPercentage >= 20 && item.discountPercentage < 30) {
                if(discount.indexOf('less than 30%') === -1) {
                  discount[3] = 'less than 30%';
                } 
              }
              else if(item.discountPercentage >= 30 && item.discountPercentage < 40) {
                if(discount.indexOf('less than 40%') === -1) {
                  discount[2] = 'less than 40%';
                } 
              }
              else if(item.discountPercentage >= 40 && item.discountPercentage < 50) {
                if(discount.indexOf('less than 50%') === -1) {
                  discount[1] = 'less than 50%';
                } 
              }
              else {
                if(discount.indexOf('more than 50%') === -1) {
                  discount[0] = 'more than 50%';
                }
              }
          });
          
          dispatch({type: 'UPDATE_PRODUCT_LISTS', productList, brands, subCategories, discount});         
        }
        dispatch({type: 'STOP_LOADER'});
      })
      .catch(err => console.log(err))
    },[pageHeading]);

    let categoryElement = (
      <CategoryLayout>
          <FilterSection filter={state.filter}/>
          <ProductsSection productList={state.productList} pageHeading={pageHeading}/> 
      </CategoryLayout>  
    );

    if(state.loading) {
      categoryElement = <Loader />
    }

  return (
    <>
      {categoryElement}
    </>    
  )
};

export default Category;

// brands:[],
//         subCategory:[],
//         discount:[],