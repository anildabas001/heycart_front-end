import React, {useContext} from 'react';
import heyCartLogo from '../../Assets/HeyCartLogo.png';
import Icon from '../UI/Icon/Icon';
import classes from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';

const Toolbar = (props) => {
    return(
        <div className={classes.Toolbar}>
            <div className={classes.IconContainer}>
                <Icon source ={heyCartLogo} description='HeyCart logo'/>
            </div>
            
            <nav>
                <NavigationItems />
            </nav>            
        </div>
    )
}

export default React.memo(Toolbar);