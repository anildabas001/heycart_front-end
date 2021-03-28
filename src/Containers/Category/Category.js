import React, {useReducer, useState, useEffect} from 'react';
import CategoryLayout from '../../Components/CategoryLayout/CategoryLayout';
import FilterSection from '../../Components/CategoryLayout/FilterSection/FilterSection'; 
import ProductsSection from '../../Components/CategoryLayout/ProductsSection/ProductsSection';
import Loader from '../../Components/UI/Loader/Loader';

const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTS_AND_FILTERS': 
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
            options: [{name: 'exclude out of stock items', value: 'xxx'}]
          }
        ]
      });

      case 'UPDATE_PRODUCTS':
        return({
          ...state,
          productList: [...action.productList],
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
  const pageHeading = props.match.params.category;
  const [productsURL, updateProductsURL] = useState(`http://localhost:3001/heyCart/api/v1/products/parent-category/${pageHeading}?selectFields=-description,-primaryImage,-organic,-variants`);
        
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
          options: []
        }        
      ],
      loading: true
    };

    const [state, dispatch] = useReducer(categoryReducer, initialCategoryState);
    console.log(state);

    useEffect(() => {

      dispatch({type: 'RESET_INITIALSTATE', initialCategoryState});
      dispatch({type: 'START_LOADING'});

      let brands = [];
      let subCategories = [];
      let discount = [];
      let productList= [];

      const url = encodeURI(`http://localhost:3001/heyCart/api/v1/products/parent-category/${pageHeading}?selectFields=-description,-primaryImage,-organic,-variants`);
      console.log(url);
      fetch(url)
      .then(response => response.json())
      .then(response=> {
        if (response.data.length > 0) {
          productList = [...response.data];

          var checkDuplicate ={};

          response.data.forEach((item) => {  

              if (! checkDuplicate[item.brand]) {
                brands.push({name: item.brand, value: item.brand});
                checkDuplicate[item.brand] = true;
              }
              
               item.categories.forEach(category => {                 
                 if(! checkDuplicate[category]) {
                   subCategories.push({name: category, value: category});                   
                   checkDuplicate[category] = true;
                 }
               });

              // subCategories = item.categories..filter((category) => category);

              if (item.discountPercentage < 10 && item.discountPercentage > 0) {
                 if(discount.indexOf('less than 10%') === -1) {
                   discount[4] = {name: 'less than 10%', value: 'lt=10,gt=0'};
                 }                  
              }
              else if(item.discountPercentage >= 10 && item.discountPercentage < 20) {
                if(discount.indexOf('less than 20%') === -1) {
                  discount[3] = {name: 'less than 20%', value:'lt=20,gt=0'};
                } 
              }
              else if(item.discountPercentage >= 20 && item.discountPercentage < 30) {
                if(discount.indexOf('less than 30%') === -1) {
                  discount[2] = {name: 'less than 30%', value:'lt=30,gt=0'};
                } 
              }
              else if(item.discountPercentage >= 30 && item.discountPercentage < 40) {
                if(discount.indexOf('less than 40%') === -1) {
                  discount[1] = {name:'less than 40%', value: 'lt=40,gt=0'};
                } 
              }
              else if(item.discountPercentage >= 40 ) {
                if(discount.indexOf('more than 40%') === -1) {
                  discount[0] = {name: 'more than 40%', value: 'gte=40'};
                } 
              }              
          });
          
          dispatch({type: 'UPDATE_PRODUCTS_AND_FILTERS', productList, brands, subCategories, discount});         
        }
        dispatch({type: 'STOP_LOADER'});
      })
      .catch(err => console.log(err))
    },[pageHeading]);

    const filterFormHandler = (event) => {
      event.preventDefault();
      var brands = [];
      var subCategories = [];
      var discounts = [];
      var queryString = `http://localhost:3001/heyCart/api/v1/products/parent-category/${pageHeading}?selectFields=-description,-primaryImage,-organic,-variants`;
      console.log(queryString);

      Array.from(event.target.elements).forEach(input => {
        if (input.name === 'brands' && input.checked) {
          brands.push(input.value);
        }
        else if(input.name === 'sub-category' && input.checked) {
          subCategories.push(input.value);
        }
        else if(input.name === 'discount' && input.checked) {
          discounts.push(input.value);
        }
        else if(input.name === 'availability' && input.checked) {
          discounts.push(input.value);
        }
      });

      if (brands.length > 0) {
        console.log(brands);
        queryString = `${queryString}&brand=${brands.join(',')}`
      }

      if (subCategories.length > 0) {
        queryString = `${queryString}&subCategories=${subCategories.join(',')}`
      }

      if (discounts.length > 0) {
        queryString = `${queryString}&discount=${discounts.join('|')}`
      }

      console.log(queryString);

      fetch(queryString).then(response => response.json()).then(data => dispatch({type: 'UPDATE_PRODUCTS', productList: data.data}));

    }


    let categoryElement = (
      <CategoryLayout>
          <FilterSection filterFormHandler={filterFormHandler} filter={state.filter}/>
          <ProductsSection productList={state.productList} pageHeading={pageHeading.replace(/\b\w/g, l => l.toUpperCase())}/> 
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
