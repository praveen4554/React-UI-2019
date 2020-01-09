import React, {Component} from 'react';
import axios from 'axios';
import { Childeren } from './App';
import { InputComponent } from './InuptComponent';
export default class UserList extends React.Component {
    constructor() {
        super();
        this.ChildRef = React.createRef();
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
        .then((data)=>{
            console.log(data);
        });
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify({
                title: 'praveen',
                userId: 10
            }),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(response => response.json())
        .then((data)=>{
            console.log(data);
        });

        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        });
        this.ChildRef.current.focus();
    }
    render() {
        const listOfUsers = ['praveen','praveen1','praveen2','praveen3'];
        console.log(this.props.match.params.userName);
        if(this.props.match.params.userName) {
            listOfUsers.push(this.props.match.params.userName);
        }
        const list  = listOfUsers.map((ele, index)=>{
            return <li key={index}>{ele}</li>
        })
        return(
            <div>
                <ul>
                 {list}
                </ul>
       <Childeren>
         <ul>
         <li>Angular</li>
         <li>React</li>
         <li>Node</li>
         <li>Backbone</li>
         </ul>
       </Childeren>
       <InputComponent/>
            </div>
        )
    }
}