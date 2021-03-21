import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button onClick={props.onClickHandler} className={classes.Button}>{props.children}</button>
    );
}

export default React.memo(Button);