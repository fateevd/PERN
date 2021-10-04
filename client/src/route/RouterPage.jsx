import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import {privatePage, publicPage} from "./routes";
import {MAIN_PAGE} from "../utils/RouteContsts";
import {useSelector} from "react-redux";

const RouterPage = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    return (
        <div className="App">
            <Switch>
                {isAuth && privatePage.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                {publicPage.map(({path, Component}) =>
                    <Route key={path} component={Component} path={path} exact/>
                )}
                <Redirect to={MAIN_PAGE}/>
            </Switch>
        </div>


    );
};

export default RouterPage;