import React from 'react';
import logo from './logo.svg';
import Test from './ClassComponent';
import './App.css';
import UserList from './UserComponent';
import User from './User';
import HoverComponent from './HoverComponent';
import ShareFunction from './ShareFunction';
import Counter from './Counter';
import { connect } from 'react-redux';
import StateInFunctionalComponent from './stateInFunctionalComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import UserRegistrationForm from './FormValidations';
import NotFoundComponent from './NotFoundComponent';
function App(props) {
  console.log(props.userName);
  return (
    <div className="test">
       <Router>
       <ul>
        <li>
        <Link to="/user"> Home </Link>
        </li>
        <li>
        <Link to="/user/createUser"> add User </Link>
        </li>
        <li>
        <Link to="/test"> Test </Link></li>
       </ul>
       <Switch>
       <Route exact path="/user" component={UserList}/>
       <Route exact path="/user/createUser" component={UserRegistrationForm}/>
       <Route exact path="/user/:userName" component={UserList}/>
       <Route path="/test" component={Test}/>
       <Route path="*" component={NotFoundComponent}/>
       </Switch>
       </Router>
       <Counter render = {(counter,incrementCount) =>(
         <User counter={counter} incrementCount= {incrementCount}/>
  )}/>
       <Counter render = {(counter,incrementCount) =>(
         <HoverComponent counter={counter} incrementCount= {incrementCount}/>
  )}/>
       <ShareFunction render={(isAuthenticated)=> isAuthenticated? 'praveen': 'Guest'}/>
       <StateInFunctionalComponent/>
       <div> UserName:{props.userName}
       <button onClick={props.user}> change User</button>
       </div>
    </div>
  );
}

export function Childeren(props) {
  return(
    <div>
      Hello
      {props.children}
    </div>
  )
}

const mapStateToProps = (state) =>{
  console.log(state);
  return {
    userName: state.user
  }
}

const mapDispatchTOProps = (dispatch) =>{
  return {
    user: () => dispatch({type:'Authenticated',val:'praveen'})
  }
}
export default connect(mapStateToProps,mapDispatchTOProps)(App);
