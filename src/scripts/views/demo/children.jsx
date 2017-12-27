import React from 'react';

export class Children extends React.Component {
    render() {
        return (
            <h2>Scope: {this.props.scopeState.index}</h2>
        );
    }

    onReset () {
        this.props.appState.resetTimer();
    }
};
