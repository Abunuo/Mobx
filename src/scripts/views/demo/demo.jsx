import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import { Children } from './children.jsx';
import scopeState from './store.js';

@withRouter
@inject(({store}) => ({
    appState: store.appState,
    scopeState: store.scopeState
}))

@observer
export class TimerView extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.onReset.bind(this)} style={{width:150,height:60,fontSize:14}}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <hr />
                
                <h2>globalState: {this.props.scopeState.index}</h2>
                <Children scopeState = {scopeState} />
                <hr/>
                <Link to='/demo2/show'>跳转 show</Link> <br />
                <Link to='/demo2/show/123'>跳转 show/123</Link>
            </div>
        );
    }

    onReset () {
        this.props.appState.resetTimer();
    }
};
