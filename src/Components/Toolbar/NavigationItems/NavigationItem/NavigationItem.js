import React from 'react';
import {Link} from 'react-router-dom'
import * as ReactIcons from 'react-icons/io5';
import classes from './NavigationItem.module.css';

const NavigationItem =(props) => {
    let ReactIcon;

    switch(props.type) {
        case 'dropdown':
            let dropdownName = <a className={classes.Dropdown}>{props.navigationData.name}</a>; 
            let icon;            
            if(props.navigationData.icon) {
                ReactIcon = ReactIcons[`${props.navigationData.icon}`];
                icon = props.icon;
                dropdownName = props.navigationData.iconPosition === 'right'?  <a className={[classes.Dropdown, classes.AlignIcon].join(' ')}><span className={ classes.IconRight}>{props.navigationData.name}</span><ReactIcon /></a> : <a className={[classes.Dropdown, classes.AlignIcon].join(' ')}><ReactIcon /><span className={classes.IconRight}>{props.navigationData.name}</span></a>
            }
            return   <li>
                {dropdownName} 
                    <ul className={classes.dropdownItems}>
                        {props.navigationData.dropdownData.map(data => <li key={data.linkName}><Link to={data.linkTo}>{data.linkName}</Link></li>)}
                    </ul>
            </li>;
        case 'search': 
            return <li className={classes.searchForm}>
                    <form className={classes.AlignIcon}>
                        <input type="text" placeholder={props.navigationData.placeholder}/> <ReactIcons.IoSearchOutline />                                           
                    </form>
            </li>;
            
        case 'link':
            let link = <Link to={props.navigationData.linkTo}>{props.navigationData.name}</Link>;   
            if(props.navigationData.icon) { 
                ReactIcon = ReactIcons[`${props.navigationData.icon}`];
                link = props.navigationData.iconPosition.toLowerCase() === 'right' ? <Link to={props.navigationData.linkTo}><span className={classes.AlignIcon}>{props.navigationData.name}<ReactIcon /></span></Link> : <Link to={props.navigationData.linkTo}><span className={classes.AlignIcon}><ReactIcon />{props.navigationData.name}</span></Link>;
            }

            return <li>{link}</li>;
    }
}

export default NavigationItem;
