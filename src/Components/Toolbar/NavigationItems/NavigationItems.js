import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = (props) => {
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
        
        <NavigationItem type="search" navigationData={
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
                linkTo: '/login'
            }
        } />       
    </ul>      
    );
}

export default Navigation;