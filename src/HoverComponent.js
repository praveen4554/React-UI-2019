import React, {Component} from 'react';
export default class HoverComponent extends React.Component {
    render() {
       const { counter, incrementCount } = this.props
        return(
            <button onMouseOver={incrementCount}>
             hover {counter} times
            </button>
        )
    }
}