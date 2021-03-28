import React, {useContext} from 'react';
import classes from './NavigationItems.module.css';
import {connect} from 'react-redux';
import NavDropdown from './NavigationItem/NavDropDown/NavDropdown';
import NavSearchbar from './NavigationItem/NavSearchbar/NavSearchbar';
import NavLink from './NavigationItem/NavLink/NavLink';
import NavigationContext from '../../Context/NavigationContext';

const Navigation = (props) => {  
    console.log(props.authData);
    const searchdata = useContext(NavigationContext);
    let loginLink = <NavLink navigationData={
        {
            name: 'Login',
            linkTo: '/login'+ `?redirectTo=${window.location.pathname}${window.location.search}`                
        }
    } /> ;

    if(props.authData.isLoggedin && props.authData.name.length > 0) {
        loginLink = <NavDropdown navigationData={
            {
                 name: props.authData.name.split(' ')[0],
                 icon: 'IoChevronDownSharp',
                 position: 'right',
                 iconPosition: 'right',
                 dropdownData: [
                 {
                     linkName: 'My Profile',
                     linkTo: '/profile'                    
                 },
                 {
                     linkName: 'My Order',
                     linkTo: '/order'
                 },
                 {
                     linkName: 'Logout',
                     linkTo: '/logout'
                 }
             ]
            } 
         } />
    }
    

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
                    placeholder: 'Search for products'
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
            {loginLink}
        </li>

    </ul>      
    );
}

const mapStateToProps = (state) => {
    return {
        authData: state.authentication
    }
}

const mapDispatchToProps =(dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);