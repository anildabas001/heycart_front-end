import React, {memo} from 'react';
import classes from './InputField.module.css';
import ErrorField from '../ErrorField/ErrorField';

const InputField = (props, ref) => {
    console.log(props.fieldAttributes.label);
    switch(props.fieldName) {
        case 'input': 
            let inputClass;
            if (props.isValid && props.isTouched) {
                inputClass = classes.InputValid;
            }
            else if (!props.isValid && !props.isTouched) {
                inputClass = null;
            }
            else {
                inputClass = classes.InputInValid;
            }

            return (
                <div className={classes.InputFieldContainer}>
                    <div className={classes.FieldRow}>
                        <label htmlFor={props.fieldAttributes.name}>{props.fieldAttributes.label}</label>
                        <input ref={ref} className={inputClass} type={props.fieldAttributes.type} value={props.fieldAttributes.value} name={props.fieldAttributes.name} id={props.fieldAttributes.name} onChange={props.changeHandler} />
                    </div>                    
                    {props.errorMessage && props.showErrorMessage ? <ErrorField>{props.errorMessage}</ErrorField>: null}
                </div>
            );
    }
}

export default memo(React.forwardRef(InputField));