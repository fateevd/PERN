import React, {useState} from 'react';
import MyInput from "../../UiComponent/MyInput/MyInput";
import style from "./Registration.module.scss"
import MyButton from "../../UiComponent/Button/MyButton";
import {Link, useHistory} from "react-router-dom";
import {login, registration} from "../../http/reqest";
import {useDispatch} from "react-redux";
import {sinUp} from "../../store/actions";
import {TODO_PAGE} from "../../utils/RouteContsts";


const Registration = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const sinUpR = async () => {
        try {
            const response = await registration(email, password)
            console.log(response)
            setPassword('');
            setEmail('');
            dispatch(sinUp());
            history.push(TODO_PAGE);

        }
        catch (e){
            alert(e.response.data.message);
        }

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
            <MyButton  onClick={sinUpR} className={style.registration_button}>Регистрация</MyButton>
            <Link to={"/auth"}>У меня уже есть аккаунт</Link>
        </div>
    );
};

export default Registration;