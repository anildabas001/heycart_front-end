import React from 'react';
import * as ReactIcons from 'react-icons/io5';
import classes from './NavDropdown.module.css';
import {Link} from 'react-router-dom';

const NavDropdown = (props) => {
    let ReactIcon;
    let element;

    let dropdownName = <span className={classes.Dropdown}>{props.navigationData.name}</span>; 
    let icon;        

    if(props.navigationData.icon) {
        ReactIcon = ReactIcons[`${props.navigationData.icon}`];
        icon = props.icon;
        dropdownName = props.navigationData.iconPosition === 'right'?  <a className={[classes.Dropdown, classes.AlignIcon].join(' ')}><span className={ classes.IconRight}>{props.navigationData.name}</span><ReactIcon /></a> : <a className={[classes.Dropdown, classes.AlignIcon].join(' ')}><ReactIcon /><span className={classes.IconRight}>{props.navigationData.name}</span></a>
    }

    element = 
        <>
        {dropdownName} 
            <ul className={classes.dropdownItems}>
                {props.navigationData.dropdownData.map(data => <li key={data.linkName}><Link to={data.linkTo}>{data.linkName}</Link></li>)}
            </ul>
    </> ;

    return (
    <>
        {element}
    </>     
    );
}

export default NavDropdown;