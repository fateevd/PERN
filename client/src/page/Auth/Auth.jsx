import React, {useState} from 'react';
import style from "../Registration/Registration.module.scss";
import MyInput from "../../UiComponent/MyInput/MyInput";
import MyButton from "../../UiComponent/Button/MyButton";
import {Link, useHistory} from "react-router-dom";
import {login} from "../../http/reqest";
import {sinUp} from "../../store/actions";
import {TODO_PAGE} from "../../utils/RouteContsts";
import {useDispatch} from "react-redux";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const sinUpR = async () => {
        try {
            const response = await login(email, password)
            setPassword('');
            setEmail('');
            dispatch(sinUp());
            history.push(TODO_PAGE);
        } catch (e) {
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
            <MyButton onClick={sinUpR} className={style.registration_button}>Регистрация</MyButton>
            <Link to={"/auth"}>У меня уже есть аккаунт</Link>
        </div>
    );
};

export default Auth;