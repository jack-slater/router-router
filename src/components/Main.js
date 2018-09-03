import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Profile} from "./profile/Profile";
import {Training} from "./training/Training";

export const Main = ({}) => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/training' component={Training}/>
            </Switch>
        </main>
    )
};