import React, {useState, useEffect} from 'react';
import AuthenticationForm from '../../Components/UI/AuthenticationForm/AuthenticationForm';
import InputField from '../../Components/UI/InputField/InputField';

const Login = (props) => {

    const validate = (fieldState, value) => {
        let errorMessage = [];
        let isValid = true;

        const validate = fieldState.validate;

        if (validate.required) {
            if (!value.trim().length > 0) {
                isValid = false;
                errorMessage.push(validate.required[1]);
            }             
        }

        if (validate.email) {
            if (! /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)) {
                isValid = false;
                errorMessage.push(validate.email[1]);
            }
        }

        if (validate.minLength) {
            if (value.length <= validate.minLength[0]) {
                isValid = false;
                errorMessage.push(validate.minLength[1]);
            }
        }

        return {isValid, errorMessage};
    }

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

    const fieldChangeHandler = (fieldState, setFieldState, event) => {
        var isTouched = true;
        isTouched = event.target.value.length < 1 ?  false : true;
        setFieldState((currentState)=>{
            return{
                ...currentState,
                value: event.target.value,
                isTouched,
                showErrorMessage: false
            }
        });

        const {isValid, errorMessage} = validate(fieldState, event.target.value);
        console.log(isValid, errorMessage);

        setFieldState((currentState)=>{            
            return{
                ...currentState,
                isValid,
                errorMessage
            }
        });
    }    

    const formSubmitHandler = (fields, event) => {
        event.preventDefault();
        let valid = true;

        fields.map((field) => {            
            const [state, updateState] =  Object.keys(field);
            const fieldState = field[state];
            const updateFieldState = field[updateState];

            valid = fieldState.isValid && valid;
             if(!valid) {
                updateFieldState( currentField => {
                     return {
                         ...currentField,
                         showErrorMessage: true
                     }
                })
            }           
        });
        
        if(valid) {
            alert('Log in successfull');
        }
    }

    return (
         <AuthenticationForm formSubmitHandler={(event) => formSubmitHandler([{emailState, setEmailState}, {passwordState, setPasswordState}], event)} AuthFormType='Login' heading="Login Form">
            <InputField showErrorMessage={emailState.showErrorMessage} errorMessage={emailState.errorMessage[0]} isTouched={emailState.isTouched} isValid={emailState.isValid} fieldName={emailState.fieldName} fieldAttributes ={emailState.fieldAttributes} value={emailState.value} changeHandler = {(event) => {fieldChangeHandler(emailState, setEmailState, event)}}/>
            <InputField showErrorMessage={passwordState.showErrorMessage} errorMessage={passwordState.errorMessage[0]} isTouched={passwordState.isTouched} isValid={passwordState.isValid} fieldName={passwordState.fieldName} fieldAttributes ={passwordState.fieldAttributes} value={passwordState.value} changeHandler = {(event) => {fieldChangeHandler(passwordState, setPasswordState, event)}}/>  
         </AuthenticationForm>
    );
} 

export default Login;