import React from 'react';
import classes from './Signup.module.css';
import AuthenticationForm from '../../Components/UI/AuthenticationForm/AuthenticationForm';
import InputField from '../../Components/UI/InputField/InputField';

const Login = (props) => {
    return (
         <AuthenticationForm AuthFormType='Signup' heading="Signup Form">
            <InputField fieldName='input' type='text' label='Email' name='email'/>
            <InputField fieldName='input' type='password' label='Password' name='email'/>
         </AuthenticationForm>
    );
} 

export default Login;