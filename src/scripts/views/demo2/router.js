import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Show from './demo2.jsx'

export default ({match}) => (
    <Switch>
        <Route exact path="/demo2" render={() => (
            <h2>我是 demo2 </h2>
        )}/>
        <Route path="/demo2/show" component={Show}/>
        <Route path="/demo2/show/:id" component={Show}/>
    </Switch>
)
