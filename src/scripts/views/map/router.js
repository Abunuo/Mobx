import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Map from './map.jsx'

export default ({match}) => (
    <Switch>
        <Route exact path="/map" component={Map}/>
    </Switch>
)
