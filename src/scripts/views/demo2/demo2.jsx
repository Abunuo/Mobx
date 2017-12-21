import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, NavLink, Route } from 'react-router-dom';


@inject(({store}) => ({
    appState: store.appState
}))

@observer
export default class Show extends React.Component{
    render() {
        return (
                <div>
                    <h2>
                        哈哈哈哈
                        {this.props.appState.timer}
                    </h2>
                    <Link to='/demo/timer-view'>跳转 timer-view</Link>
                    <hr />
                    <ul style={{overflow: 'hidden'}}>
                        <li style={{float: 'left',width:100}}><NavLink to="/demo2/show/123">123</NavLink></li>
                        <li style={{float: 'left',width:100}}><NavLink to="/demo2/show/456">456</NavLink></li>
                        <li style={{float: 'left',width:100}}><NavLink to="/demo2/show/789">789</NavLink></li>
                    </ul>
                    <hr />
                    <Route path="/demo2/show/:id" render={({match}) => (
                        <h2>{match.params.id}</h2>
                    )}/>
                </div>
        )
    }
}
