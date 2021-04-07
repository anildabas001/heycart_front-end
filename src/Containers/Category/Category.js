import React, {useReducer, useState, useEffect, useRef} from 'react';
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
            options: [...action.discounts]
          },
          {
            heading: 'Availability',
            options: [{name: 'exclude out Of stock', value: 'true'}]
          }
        ]
      });

      case 'UPDATE_LOADED_PRODUCTS_AND_FILTERS': 
        return  ({
          ...state,
          productList: [...state.productList, ...action.productList],
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
              options: [...action.discounts]
            },
            {
              heading: 'Availability',
              options: [{name: 'exclude out Of stock', value: 'true'}]
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
  const pageHeading = decodeURIComponent(props.match.params.category);
  const prevPageHeadingRef = useRef();
  //const prevOffsetRef = useRef();
  //const [productsURL, updateProductsURL] = useState(`http://localhost:3001/heyCart/api/v1/products/parent-category/${pageHeading}?selectFields=-description,-primaryImage,-organic,-variants`);
  //const paginateURL = useState('');
  //const [pageOffset, updatePageOffset] = useState(1);
  let [newProductCount, updatenewProductCount] = useState(0);
  //const [loadMore, updateLoadMoreStatus] = useState(false);
  //const productLimit = 12;

  // const loadMoreHandler = (event) => {
  //   updatePageOffset((offset) => {return offset = offset + 1;});
  //   updateLoadMoreStatus(true)
  // };

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
          options: [{name: 'exclude out Of stock', value: 'true'}]
        }        
      ],
      loading: true
    };

    const [state, dispatch] = useReducer(categoryReducer, initialCategoryState);

    useEffect(() => {      
      prevPageHeadingRef.current = pageHeading;
      //prevOffsetRef.current = pageOffset;
    });

    const prevPageHeading = prevPageHeadingRef.current;
    //const prevOffset = prevOffsetRef.current;

    useEffect(() => {
      //if (prevPageHeading !== pageHeading || prevOffset !== pageOffset) {
      if (prevPageHeading !== pageHeading) {
        
        dispatch({type: 'START_LOADER'});
        dispatch({type: 'RESET_INITIALSTATE', initialCategoryState});
        // if (!loadMore) {
          
        // }        

        let brands = [];
        let subCategories = [];
        let discounts = [];
        let productList= [];

        //const url = encodeURI(`http://localhost:3001/heyCart/api/v1/products/parent-category/${pageHeading}?selectFields=-description,-primaryImage,-organic,-variants&page=${pageOffset}&limit=${productLimit}`);

        const url = encodeURI(`http://localhost:3001/heyCart/api/v1/products/parent-category/${pageHeading}?selectFields=-description,-primaryImage,-organic,-variants`);
        
        fetch(url)
        .then(response => response.json())
        .then(response=> {
          if (response.data.length > 0) {
            updatenewProductCount(response.data.length);
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
                   if(discounts.indexOf('less than 10%') === -1) {
                     discounts[4] = {name: 'less than 10%', value: 'lt=10,gt=0'};
                   }                  
                }
                else if(item.discountPercentage >= 10 && item.discountPercentage < 20) {
                  if(discounts.indexOf('less than 20%') === -1) {
                    discounts[3] = {name: 'less than 20%', value:'lt=20,gt=0'};
                  } 
                }
                else if(item.discountPercentage >= 20 && item.discountPercentage < 30) {
                  if(discounts.indexOf('less than 30%') === -1) {
                    discounts[2] = {name: 'less than 30%', value:'lt=30,gt=0'};
                  } 
                }
                else if(item.discountPercentage >= 30 && item.discountPercentage < 40) {
                  if(discounts.indexOf('less than 40%') === -1) {
                    discounts[1] = {name:'less than 40%', value: 'lt=40,gt=0'};
                  } 
                }
                else if(item.discountPercentage >= 40 ) {
                  if(discounts.indexOf('more than 40%') === -1) {
                    discounts[0] = {name: 'more than 40%', value: 'gte=40'};
                  } 
                }              
            });            

            // if (loadMore) {
            //   const existingbrands = state.filter[0].options; 
            //   const existingSubCategories  = state.filter[1].options;
            //   const existingDiscount =  state.filter[2].options;
            //   let updatedBrands = [];
            //   let updatedSubCategories = [];
            //   let updatedDiscount = [];
              
            //   if (brands.length > 0) {
            //     updatedBrands = existingbrands.map(brand => {                
            //       let brandExist = false;
            //       brands.forEach(filterBrand => {if(filterBrand.name === brand.name){brandExist = true;}});
  
            //       if(!brandExist) {
            //         return brand;
            //       }
            //     });
            //   }              

            //   if (subCategories.length > 0) {
            //     updatedSubCategories = existingSubCategories.map(category => {                
            //       let categoryExist = false;
            //       subCategories.forEach(filterCategory => {if(filterCategory.name === category.name){categoryExist = true;}});
  
            //       if(!categoryExist) {
            //         return category;
            //       }
            //     });
            //   }              
              
            //   if (discounts.length > 0) {
            //     updatedDiscount = existingDiscount.map(discount => {    
            //       if(discount) {
            //         let discountExist = false;
            //         discounts.forEach(filterDiscount => {if(filterDiscount.name === discount.name){discountExist = true;}});
  
            //         if(!discountExist) {
            //           return discount;
            //         }
            //       } 
            //       return undefined;
            //     });
            //   }              
              
            //   updatedBrands = [...updatedBrands, ...brands];
            //   updatedSubCategories = [...updatedSubCategories, ...subCategories];
            //   updatedDiscount = [...updatedDiscount, ...discounts];

            //   dispatch({type: 'UPDATE_LOADED_PRODUCTS_AND_FILTERS', productList, brands: updatedBrands, subCategories: updatedSubCategories, discounts: updatedDiscount});
              
            //}    
            //else {
              //updatePageOffset(1);
              dispatch({type: 'UPDATE_PRODUCTS_AND_FILTERS', productList, brands, subCategories, discounts});
            //}    

          }
          dispatch({type: 'STOP_LOADER'});
          //updateLoadMoreStatus(false);
        })
        .catch(err => console.log(err))
      }      
    }, [pageHeading, initialCategoryState, prevPageHeading]);

    const filterFormHandler = (event) => {
      event.preventDefault();      
      dispatch({type: 'START_LOADER'});
      var brands = [];
      var excludeOutOfStock = [];
      var subCategories = [];
      var discounts = [];
      var queryString = `http://localhost:3001/heyCart/api/v1/products/parent-category/${pageHeading}?selectFields=-description,-primaryImage,-organic,-variants`;
      
      Array.from(event.target.elements).forEach(input => {
        if (input.name === 'brands' && input.checked) {
          brands.push(input.value);
        }
        else if(input.name === 'sub-category' && input.checked) {
          subCategories.push(input.value);
        }
        else if(input.name === 'availability' && input.checked) {
          excludeOutOfStock.push(input.value);
        }
        else if(input.name === 'discount' && input.checked) {
          discounts.push(input.value);
        }
      });

      if (brands.length > 0) {
        queryString = `${queryString}&brand=${brands.join(',')}`
      }

      if (subCategories.length > 0) {
        queryString = `${queryString}&subCategories=${subCategories.join(',')}`
      }

      if (discounts.length > 0) {
        queryString = `${queryString}&discount=${discounts.join('|')}`
      }

      if (excludeOutOfStock.length > 0) {
        queryString = `${queryString}&excludeOutOfStock=${excludeOutOfStock.join('')}`
      }

      fetch(queryString).then(response => response.json()).then(data => {
        dispatch({type: 'UPDATE_PRODUCTS', productList: data.data});    
        dispatch({type: 'STOP_LOADER'});
      });

    }

    let categoryElement = (
      <CategoryLayout>
          <FilterSection productCount={state.productList.length} filterFormHandler={filterFormHandler} filter={state.filter}/>
          <ProductsSection newProductCount={newProductCount} productList={state.productList} pageHeading={pageHeading.replace(/\b\w/g, l => l.toUpperCase())}/> 
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


// const prevItemIdRef = useRef();
//   useEffect(() => {
//     prevItemIdRef.current = props.itemId;
//   });
//   const prevItemId = prevItemIdRef.current;

//   // In a callback Hook to prevent unnecessary re-renders 
//   const handleFetchItems = useCallback(() => {
//     fetchItemsFromApi().then(setItems);
//   }, []);

//   // Fetch items on mount
//   useEffect(() => {
//     handleFetchItems();
//   }, []);

//   // I want this effect to run only when 'props.itemId' changes,
//   // not when 'items' changes
//   useEffect(() => {
//     if(prevItemId !== props.itemId) {
//       console.log('diff itemId');
//     }

//     if (items) {
//       const item = items.find(item => item.id === props.itemId);
//       console.log("Item changed to " item.name);
//     }
//   }, [ items, props.itemId ])

//   // Clicking the button should NOT log anything to console
//   return (
//     <Button onClick={handleFetchItems}>Fetch items</Button>
//   );
// }

// Desired hook
// function useCompare (val) {
//   const prevVal = usePrevious(val)
//   return prevVal !== val
// }

// // Helper hook
// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }
// and then use it in useEffect

// function Component(props) {
//   const hasItemIdChanged = useCompare(props.itemId);
//   useEffect(() => {
//     if(hasItemIdChanged) {
//       // …
//     }
//   }, [hasItemIdChanged])
//   return <></>
// }