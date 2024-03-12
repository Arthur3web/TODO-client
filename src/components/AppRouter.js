import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../Routes";
import { TODO_ROUTE } from "../utils/consts";
import { Context } from "..";


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/> 
            )}
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={TODO_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;