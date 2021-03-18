import React from 'react';
import CollapsibleControl from '../../UI/CollapsibleControl/CollapsibleControl';
import NavLink from "../../NavigationItems/NavigationItem/NavLink/NavLink";
import classes from './SideBarCategorySection.module.css';

const SideBarCategorySection = (props) => {
    return(<section className={classes.SideBarCategory}>
    <CollapsibleControl title='Shop By Category'>
        <ul>
            <li>
                <NavLink navigationData={
                        {
                            name: 'Fruits & Vegetables',
                            linkTo: '/fruits & vegetables'                
                        }       
                    } 
                />
            </li>

            <li>
                <NavLink navigationData={
                        {
                            name: 'Beverages',
                            linkTo: '/beverages'
                        }     
                    } 
                />
            </li>

            <li>
                <NavLink navigationData={
                        {
                            name: 'Snacks',
                            linkTo: '/snacks'
                        }     
                    } 
                />
            </li>

            <li>
                <NavLink navigationData={
                        {
                            name: 'Eggs, Meat & Fish',
                            linkTo: '/Eggs, Meat & Fish'
                        }      
                    } 
                />
            </li>
        </ul>
    </CollapsibleControl>
    </section>);
}

export default SideBarCategorySection;
