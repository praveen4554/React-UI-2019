
import React, { Component} from 'react';
export default class UserRegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            userNameError: false
        };
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeEvent(event) {
        if(event.target.id === 'userName' && event.target.value.length <=5 ){
            this.setState({[event.target.id]: event.target.value, userNameError: true});
        } else {
            this.setState({[event.target.id]: event.target.value, userNameError: false});
        }
        console.log(this.state);
    }
    handleSubmit(event) {
        this.props.history.push('/user/praveen4');
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}> 
              <div><input id="userName" type="text" value={this.state.userName} onChange={this.handleChangeEvent}/></div>
              { this.state.userNameError ? <div>Username should be gereater than 5</div>: null }
              <div><input type="password" id="password" value={this.state.password} onChange={this.handleChangeEvent}/></div>
              <div><input type="confirmPassword" id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChangeEvent}/></div>
              <input type="submit"/>
            </form>
        )
    }
}