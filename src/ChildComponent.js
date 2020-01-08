
import React, {Component} from 'react';
import { Childeren } from './App';
export default class ChildComponent extends React.Component {
     constructor() {
       super();
       this.state = {

       }
       this.passingData = this.passingData.bind(this);
   }
   passingData() {
       console.log('data');
       this.props.childData(this.props.praveen+1);
   }

//    componentWillMount() {
//        console.log('component will Mount');
//    }
   componentDidMount() {
       console.log('DId Mount');
   }
//    componentWillReceiveProps() {
//        console.log('receive props');
//    }
   shouldComponentUpdate() {
       console.log('should component update');
       console.log(this.props.praveen);
       if (this.props.praveen >= 3)
            return true;
       else
            return false;
   }

   static getDerivedStateFromProps(nextProps, prevProps){
       console.log(prevProps);
       console.log(nextProps);
       return '';

   }

//    componentWillUpdate() {
//        console.log('will update');
//    }
   getSnapshotBeforeUpdate() {
       console.log('before update');
       return '';
   }
   componentDidUpdate() {
       console.log('Did update');
   }
   componentWillUnmount() {
       console.log('free the memory');
   }
     render() {
         console.log(this.props);
         return(
             <div>
               childComponent
               {this.props.praveen}
               <button onClick={() => this.passingData()}> Child Button </button>

       <Childeren>
       <div>Praveen</div>
       <div>Mythri</div>
       <div>UI Developers</div>
       </Childeren>
             </div>
         )
     }
}