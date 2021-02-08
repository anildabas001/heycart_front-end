import React from 'react';
import Form from '../Form/Form';
import classes from './AuthenticationForm.module.css';
import Button from '../Button/Button';
import ErrorField from '../ErrorField/ErrorField';
import HeyCartLogo from '../../../Assets/HeyCartLogo.png';
import Icon from '../Icon/Icon';
import {Link} from 'react-router-dom';

const AuthenticationForm = (props) => {
    return (
        <div className={classes.AuthenticationForm}>
            <Icon source={HeyCartLogo} description='HeyCart Logo'></Icon>
            <div className={classes.FormContainer}>
                <h2>{props.heading}</h2>
                <form onSubmit={props.formSubmitHandler}>                
                    {props.children}
                    <ErrorField></ErrorField>
                    <Button>{props.AuthFormType}</Button>
                </form>
                {props.AuthFormType.toLowerCase() === 'login' ? <p className={classes.AuthLink}><Link to='/'>{'Forgot Password?'}</Link></p> : null}
                <p className={classes.AuthLink}>{props.AuthFormType.toLowerCase() === 'login' ? <Link to='/signup'>{'New to HeyCart? Create an account'}</Link> : <Link to='/login'>{'Already having HeyCart Account? Please Login'}</Link> }</p>
            </div>
        </div>               
    );
} 

export default AuthenticationForm;