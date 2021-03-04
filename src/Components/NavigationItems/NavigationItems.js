import React, {useContext} from 'react';
import classes from './NavigationItems.module.css';
import NavDropdown from './NavigationItem/NavDropDown/NavDropdown';
import NavSearchbar from './NavigationItem/NavSearchbar/NavSearchbar';
import NavLink from './NavigationItem/NavLink/NavLink';
import NavigationContext from '../../Context/NavigationContext';

const Navigation = (props) => {  
    const searchdata = useContext(NavigationContext);

    return (
    <ul className={classes.NavigationBar}>
        <li>
        <NavDropdown navigationData={
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

        </li>    

        <li style={{width: '50%', height: '80%'}}>
            <NavSearchbar searchHandler={searchdata.searchChangeHandler} searchOptions={searchdata.searchOptions} navigationData={
                {
                    placeholder: 'Search for product'
                } 
            }/>
        </li>
        
        <li>
            <NavLink navigationData={
                {
                    name: 'Cart',
                    linkTo: '/cart',
                    icon: 'IoCartOutline',
                    iconPosition: 'left'
                }
            } /> 
        </li>     

        <li>
            <NavLink navigationData={
                {
                    name: 'Login',
                    linkTo: '/login'+ `?redirectTo=${window.location.pathname}${window.location.search}`                
                }
            } />
        </li>

    </ul>      
    );
}

export default React.memo(Navigation);