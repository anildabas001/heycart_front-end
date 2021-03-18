import React, {useContext} from 'react';
import heyCartLogo from '../../Assets/HeyCartLogo.png';
import Icon from '../UI/Icon/Icon';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchBar from '../NavigationItems/NavigationItem/NavSearchbar/NavSearchbar';
import NavLink from '../NavigationItems/NavigationItem/NavLink/NavLink';
import HamBurger from '../HamBurger/HamBurger';
import NavSearchbar from '../NavigationItems/NavigationItem/NavSearchbar/NavSearchbar';

const Toolbar = (props) => {
    return(
        <div className={classes.Toolbar}>             
            <HamBurger crossHamBurger={props.crossHamBurger} clickHandler={props.sideBarHandler} />
            <div className={classes.IconContainer}>
                <Icon source ={heyCartLogo} description='HeyCart logo'/>
            </div>            
            <nav>
                <NavigationItems />                                
            </nav>   
            <span className={classes.smallScreenNav}>
                <NavLink navigationData={
                    {
                        name: 'Cart',
                        linkTo: '/cart',
                        icon: 'IoCartOutline',
                        iconPosition: 'left'
                    }
                } 
            />
            </span>               
        </div>
    )
}

export default React.memo(Toolbar);