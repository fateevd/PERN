import React from 'react';
import {useSelector} from "react-redux";
import {AUTH_PAGE, REGISTRATION_PAGE, TODO_PAGE} from "../../utils/RouteContsts";
import {Link} from "react-router-dom";

const Main = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    console.log(isAuth)
    return (
        <div style={{fontSize: 35, textAlign: "center",}}>
            {
                isAuth
                    ?
                    <div style={{fontSize: 35, textAlign: "center"}}>
                        <p>Красавчик</p>
                        <div>Это просто главная страница перейди на свой todo list</div>
                        <Link style={{fontSize: 35, textAlign: "center",}} to={TODO_PAGE}>Сюда ткни</Link>
                    </div>

                    :
                    <div>
                        <div style={{fontSize: 35, textAlign: "center"}}>
                            Ты еще не авторизовася ? тогда
                            <Link to={REGISTRATION_PAGE}> Регистрируйся</Link>
                        </div>
                        <Link to={AUTH_PAGE}>Авторизуйся</Link>
                    </div>

            }
        </div>
    );
};

export default Main;