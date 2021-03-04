import React from 'react';
import * as ReactIcons from 'react-icons/io5';
import classes from './NavSearchbar.module.css';

const NavSearchbar = (props) => {
    let element;

    element = <span className={classes.searchForm}>  
    <form className={classes.AlignIcon}>
        <input list='suggestions' type="text" onChange={props.searchHandler} placeholder={props.navigationData.placeholder}/>  
        {/* <datalist id="suggestions">
            {props.searchOptions.map(value => <option key={value} value={value} />)} 
        </datalist>    */}
        <ReactIcons.IoSearchOutline />                      
    </form>
</span>;

return (
    <>
        {element}
    </>
);
}

export default NavSearchbar;