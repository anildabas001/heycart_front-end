import React from 'react';
import classes from './SideBarLogin.module.css';
import {IoPersonOutline} from 'react-icons/io5';
import NavLink from "../../NavigationItems/NavigationItem/NavLink/NavLink";

const SideBarLogin = (props) => {
    const userIcon = <IoPersonOutline />;
    const loginElement = <NavLink navigationData={
        {
            name: 'Login',
            linkTo: '/login'+ `?redirectTo=${window.location.pathname}${window.location.search}`                
        }
    } />
    return( 
        <div className={classes.SideBarLogin}>
            <div className={classes.UserIcon}>
                {userIcon}
            </div>
            <ul className={classes.SideBarNavList}>
                <li>{loginElement}</li>
                <li><NavLink navigationData={
                        {
                            name: 'My Profile',
                            linkTo: '/myprofile'                
                        }       
                    } />
                </li>
                <li>
                    <NavLink navigationData={
                        {
                            name: 'My Orders',
                            linkTo: '/myorders'                
                        }       
                    } />
                </li>
                <li>
                    <NavLink navigationData={
                        {
                            name: 'Log out',
                            linkTo: '/logout'                
                        }       
                    } />
                </li>
            </ul>

        </div>
    );
}

export default SideBarLogin;