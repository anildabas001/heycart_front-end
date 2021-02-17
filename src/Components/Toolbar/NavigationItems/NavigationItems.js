import React, {useContext} from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {withRouter} from 'react-router';
import NavigationContext from '../../../Context/NavigationContext';

const Navigation = (props) => {  
    const searchdata = useContext(NavigationContext);

    return (
    <ul className={classes.NavigationBar}>
        
        <NavigationItem type="dropdown" navigationData={
           {
                name: 'Shop By Category',
                icon: 'IoChevronDownSharp',
                iconPosition: 'right',
                dropdownData: [
                {
                    linkName: 'Fruits & Vegetables',
                    linkTo: '/fruits & vegetables'                    
                },
                {
                    linkName: 'Beverages',
                    linkTo: '/beverages'
                },
                {
                    linkName: 'Snacks',
                    linkTo: '/snacks'
                },                
                {
                    linkName: 'Eggs, Meat & Fish',
                    linkTo: '/Eggs, Meat & Fish'
                },
                {
                    linkName: 'Bakery & Dairy',
                    linkTo: '/Bakery & Dairy'
                }
            ]
           } 
        } />
        
        <NavigationItem searchHandler={searchdata.searchChangeHandler} searchOptions={searchdata.searchOptions} type="search" navigationData={
            {
                placeholder: 'Search for product'
            } 
        }/> 
        
        <NavigationItem type="link" navigationData={
            {
                name: 'Cart',
                linkTo: '/cart',
                icon: 'IoCartOutline',
                iconPosition: 'left'
            }
        } /> 
        
         <NavigationItem type="link" navigationData={
            {
                name: 'Login',
                linkTo: '/login'+ `?redirectTo=${window.location.pathname}${window.location.search}`                
            }
        } />        
    </ul>      
    );
}

export default React.memo(Navigation);