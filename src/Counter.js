import React, {Component} from 'react';
export default class Counter extends React.Component {
    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }   
  incrementCount = ()=>{
      this.setState(prevState =>{
          return { counter : prevState.counter+2}
      })
  }
    render() {
        return(
            <div>
          {this.props.render(this.state.counter, this.incrementCount)}
          </div>
        )
    }
}