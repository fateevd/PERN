import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import classname from "classname"
import style from "./Navbar.module.scss";

const Navbar = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    return (
        <div>
            {
                !isAuth
                    ? <nav className={classname(style.navbar)}>
                        <NavLink className={classname(style.navbar__link)} to={"/auth"}>Авторизоватся</NavLink>
                        <NavLink className={classname(style.navbar__link)} to={"/registration"}>Регистрация</NavLink>
                    </nav>
                    : <nav className={classname()}>
                        <NavLink to={"/login"}>Выйти</NavLink>
                    </nav>

            }
        </div>
    );
};

export default Navbar;