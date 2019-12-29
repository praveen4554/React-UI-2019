
import React, {Component} from 'react';
export default class ChildComponent extends React.Component {
     constructor() {
       super();
       this.passingData = this.passingData.bind(this);
   }
   passingData() {
       console.log('data');
       this.props.childData(this.props.praveen+1);
   }
     render() {
         console.log(this.props);
         return(
             <div>
               childComponent
               {this.props.praveen}
               <button onClick={() => this.passingData()}> Child Button </button>
             </div>
         )
     }
}