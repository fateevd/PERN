import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import classname from "classname"
import style from "./Navbar.module.scss";
import {MAIN_PAGE} from "../../utils/RouteContsts";
import {logOut} from "../../store/actions";

const Navbar = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.authReducer.isAuth);


    const navLogOut = () => {
        dispatch(logOut())
        localStorage.clear();

    }


    return (
        <div>
            {
                !isAuth
                    ? <nav className={classname(style.navbar)}>
                        <NavLink className={classname(style.navbar__link)} to={"/auth"}>Авторизоватся</NavLink>
                        <NavLink className={classname(style.navbar__link)} to={"/registration"}>Регистрация</NavLink>
                    </nav>
                    : <nav className={classname(style.navbar,style.navbar__exit)}>
                        <NavLink className={classname(style.navbar__link)} to={MAIN_PAGE}
                                 onClick={() => navLogOut()}>Выйти</NavLink>
                    </nav>

            }
        </div>
    );
};

export default Navbar;