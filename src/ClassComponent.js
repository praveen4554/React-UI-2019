
import React, {Component} from 'react';
export default class Test extends React.Component {
    render() {
        const data = ['praveen1','praveen2','praveen3','praveen4','praveen5','praveen6','praveen7'];
        
        const list  = data.map((ele, index)=>{
            return <li key={index}>{ele}</li>
        })
        console.log(list);
        const element = <h1>String interpolation</h1>;
        return(<div> <h4>Its React Tutorial</h4>
        <h1> Test</h1>
            {element}
            <ul>
       { data ?    data.map((ele, index)=>{
            return <li key={index}>{ele}</li>
    }) : ''}
            </ul>
        </div>
        )
    }
}