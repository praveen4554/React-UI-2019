import React from 'react';
import logo from './logo.svg';
import Test from './ClassComponent';
import './App.css';
import UserList from './UserComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import UserRegistrationForm from './FormValidations';
import NotFoundComponent from './NotFoundComponent';
function App() {
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

export default App;
