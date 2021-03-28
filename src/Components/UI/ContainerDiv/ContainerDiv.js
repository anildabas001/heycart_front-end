import classes from './ContainerDiv.module.css';
import React from 'react';

const ContainerDiv = (props) => {
    return (
    <div className={classes.ContainerDiv}>
        {props.children}
    </div>
    );
}

export default ContainerDiv;