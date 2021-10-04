import React from 'react';
import style from "./MyInput.module.scss"

const MyInput = ({...props}) => {
    return (

        <input className={style.input} {...props}/>

    );
};

export default MyInput;