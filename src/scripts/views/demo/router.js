import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {TimerView} from './demo.jsx'

export default ({match}) => (
    <Switch>
        <Route exact path='/demo' render={() => (
            <h2>我是 demo</h2>
        )} />
        <Route path="/demo/timer-view" component={TimerView}/>
    </Switch>
)
