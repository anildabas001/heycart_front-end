import React from 'react';
import classes from './SideBar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamBurger from '../HamBurger/HamBurger';
import SideBarLogin from './SideBarLogin/SideBarLogin';

const SideBar = (props) => {
    let SideBarClasses = [classes.sideBar];
    if(props.sideBarVisible) {
        SideBarClasses.push(classes.openSideBar)
    }
    return(
        <React.Fragment>
            <div  className={SideBarClasses.join(' ')}>
                <div style={{padding: '10px'}}>
                    <HamBurger clickHandler={props.sideBarHandler} crossHamBurger={true}/>
                </div>                
                <nav>
                    <SideBarLogin />
                </nav>            
            </div>
        </React.Fragment>        
    );
}

export default SideBar;