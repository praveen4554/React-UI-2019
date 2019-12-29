
import React, {Component} from 'react';
import ChildComponent from './ChildComponent';
export default class Test extends React.Component {
   constructor() {
       super();
       this.state = {value: 1,
             loading: false,
            data: []};
       this.test = this.test.bind(this);
       this.child = this.child.bind(this);
   }
    test(event) {
        console.log('praveen');
        console.log(event);
        console.log(this.state.value);
        this.setState({value:2, data:['praveen1','praveen2','praveen3','praveen4','praveen5','praveen6','praveen7'],
    loading:true});
        // this.state.value = 2;
        console.log(this.state.value);
    }
    child(data) {
        console.log(data);
        this.setState({value: data});
        console.log('child calling');
    }
    render() {
        //const data = ['praveen1','praveen2','praveen3','praveen4','praveen5','praveen6','praveen7'];
        const displayMythri = false;
        const list  = this.state.data.map((ele, index)=>{
            return <li key={index}>{ele}</li>
        })
        console.log(list);
        const element = <h1>String interpolation</h1>;
        return(<div> 
        <ChildComponent praveen= {this.state.value} childData={this.child}> </ChildComponent>
        <button onClick ={ (event)=> this.test(event)}> Parent Button </button>
        { this.state.loading ? <div><h4>Its React Tutorial</h4>
        <h1> Test</h1>
            {element}
            <ul>
       { this.state.data ?    this.state.data.map((ele, index)=>{
            return <li key={index}>{ele}</li>
    }) : ''}
            </ul>
            value: <b>{this.state.value}</b>
        </div> : <div>Mythri</div>}
        </div>
        )
    }
}