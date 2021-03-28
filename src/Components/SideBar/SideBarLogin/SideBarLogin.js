import React from 'react';
import classes from './SideBarLogin.module.css';
import {IoPersonOutline} from 'react-icons/io5';
import NavLink from "../../NavigationItems/NavigationItem/NavLink/NavLink";
import {connect} from 'react-redux';

const SideBarLogin = (props) => {
    const userIcon = <IoPersonOutline />;
    let logoutElement = null;
    let loginElement = <NavLink navigationData={
        {
            name: 'Login',
            linkTo: '/login'+ `?redirectTo=${window.location.pathname}${window.location.search}`                
        }
    } />

    if (props.authData.isLoggedin) {
        loginElement = <p style={{padding: '5px', fontWeight: 400}}>Hello {props.authData.name.split(' ')[0]}</p>
        logoutElement = 
        <NavLink navigationData={
            {
                name: 'Log out',
                linkTo: '/logout'                
            }       
        } />
    }

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
                    {logoutElement}
                </li>
            </ul>

        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        authData: state.authentication
    };
}

export default connect(mapStateToProps, null)(SideBarLogin);