import React from 'react';

function Alert(props) {

    const capitalize_first_word = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return(
    // for not to print null value when there is alert and avoding any error 
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {capitalize_first_word(props.alert.type)} : {props.alert.msg}
    </div>
    );
}

export default Alert;
