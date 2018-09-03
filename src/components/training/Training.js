import React from "react";
import {Switch} from "react-router-dom";
import {Route} from "react-router";
import {TrainingList} from "./TrainingList";
import {TrainingSession} from "./TrainingSession";

export const Training = ({}) => {
    return (
        <div>
            <h2>This is a roster page!</h2>
            <Switch>
                <Route exact path='/training' component={TrainingList}/>
                <Route path='/training/:number' component={TrainingSession}/>
            </Switch>
        </div>
    )
};