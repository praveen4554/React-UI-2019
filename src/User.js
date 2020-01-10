import React, {Component} from 'react';
export default class User extends React.Component {
    render() {
        const { counter, incrementCount } = this.props
        return(
            <button onClick={incrementCount}>
            clicked {counter} times
            </button>
        )
    }
}