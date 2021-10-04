import React, {useState} from 'react';
import MyInput from "../../UiComponent/MyInput/MyInput";
import style from "./Registration.module.scss"
import MyButton from "../../UiComponent/Button/MyButton";
import {Link} from "react-router-dom";
import {registration} from "../../http/reqest";


const Registration = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');


    const sinUp = async () => {
        const response = await registration(email, password)
        setPassword('');
        setEmail('');
        console.log(response)
    }

    return (
        <div className={style.registration}>
            <div className={style.registration__block}>
                <h3 className={style.registration__title}>Ваш логин</h3>
                <MyInput
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <br/>
            <div className={style.registration__block}>
                <h3 className={style.registration__title}>Пароль</h3>
                <MyInput
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    value={password}
                />
            </div>
            <MyButton  onClick={sinUp} className={style.registration_button}>Регистрация</MyButton>
            <Link to={"/auth"}>У меня уже есть аккаунт</Link>
        </div>
    );
};

export default Registration;