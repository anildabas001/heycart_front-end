import React from 'react';
import classes from './BackScreen.module.css'

const BackScreen = (props) => {
    let element;
    let BackScreenClasses =[classes.BackScreen];
    // props.showBackScreen ? document.body.style.overflow = 'hidden !important' : document.body.style.overflow = 'scroll';
    
    if(props.showBackScreen) {
        BackScreenClasses.push(classes.open);
        document.body.style.overflow = 'hidden !important';
    }

    element = props.showBackScreen ? <div className={classes.BackScreen}></div> : null;
    

    return (
        
        <div className={BackScreenClasses.join(' ')} />
        
    );
}

export default BackScreen;