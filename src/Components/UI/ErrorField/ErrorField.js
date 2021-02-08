import React from 'react';
import classes from './ErrorField.module.css';

const ErrorField = (props) => {
    return (
        <>{props.children ? <div className={classes.ErrorField}>*{props.children}</div> : null}</>
    );
} 

export default ErrorField;