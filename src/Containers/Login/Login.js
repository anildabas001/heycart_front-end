import React, {useState, useEffect} from 'react';
import useInputHandler from '../../Custom Hooks/useInputHandler';
import AuthenticationForm from '../../Components/UI/AuthenticationForm/AuthenticationForm';
import InputField from '../../Components/UI/InputField/InputField';

const Login = (props) => {

    const [fieldChangeHandler, formSubmitHandler] = useInputHandler();    

    const [emailState, setEmailState] = useState({
        fieldName: 'input',
        fieldAttributes: {
            type: 'text',
            label: 'Email',
            name: 'email',
            placeholder: 'Enter Email'
        },
        showErrorMessage: false,
        value: '',
        errorMessage: ['Email must not be empty'],
        isValid: false,
        isTouched: false,
        validate: {
            required: [true, 'Email must not be empty'],
            email: [true, 'Email must be in correct format']
        }
    });

    const [passwordState, setPasswordState] = useState({
        fieldName: 'input',
        fieldAttributes: {
            type: 'password',
            label: 'Password',
            name: 'password',
            placeholder: 'Enter Password'
        },
        showErrorMessage: false,
        value: '',
        errorMessage: ['Password must not be empty'],
        isValid: false,
        isTouched: false,
        validate: {
            required: [true, 'Password must not be empty'],
            minLength: [6, 'Password length must be of more than 6 characters']
        }
    });  

    return (
         <AuthenticationForm formSubmitHandler={(event) => formSubmitHandler([{emailState, setEmailState}, {passwordState, setPasswordState}], event)} AuthFormType='Login' heading="Login Form">
            <InputField showErrorMessage={emailState.showErrorMessage} errorMessage={emailState.errorMessage[0]} isTouched={emailState.isTouched} isValid={emailState.isValid} fieldName={emailState.fieldName} fieldAttributes ={emailState.fieldAttributes} value={emailState.value} changeHandler = {(event) => {fieldChangeHandler(emailState, setEmailState, event)}}/>
            <InputField showErrorMessage={passwordState.showErrorMessage} errorMessage={passwordState.errorMessage[0]} isTouched={passwordState.isTouched} isValid={passwordState.isValid} fieldName={passwordState.fieldName} fieldAttributes ={passwordState.fieldAttributes} value={passwordState.value} changeHandler = {(event) => {fieldChangeHandler(passwordState, setPasswordState, event)}}/>  
         </AuthenticationForm>
    );
} 

export default Login;