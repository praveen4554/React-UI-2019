
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

   componentWillMount() {
       console.log('component will Mount');
   }
   componentDidMount() {
       console.log('DId Mount');
   }
   componentWillReceiveProps() {
       console.log('receive props');
   }
   shouldComponentUpdate() {
       console.log('should component update');
       console.log(this.props.praveen);
       if (this.props.praveen >= 3)
            return true;
       else
            return false;
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