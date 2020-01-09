
import React, {Component} from 'react';
// export class InputComponent extends React.Component {
//   constructor(){
//       super();
//       this.textInput = React.createRef();
//   }
//   componentDidMount() {
//       console.log(this.textInput);
//       this.textInput.current.disabled = true;
//   }
//     render() {
//         return(
//             <div>
//              <input type="text" ref={this.textInput}/>
//             </div>
//         )
//     }
    
// }

export const InputComponent = React.forwardRef((props,ref)=>{
    return(
        <div>
         <input type="text" ref={ref}/>
        </div>
    )
})