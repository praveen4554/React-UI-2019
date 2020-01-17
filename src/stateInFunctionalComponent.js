import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './reducers/reducer';

function StateInFunctionalComponent(props) {
    const [count, setCount] = useState(0)
    const [update, setUpdate] = useState(0)
    useEffect(()=>{
        document.title = `clicked ${count} times`;
    });
  return(
      <div>
       functionalComponent
       <button onClick={()=> setCount(count+1)}>
       Count {count} times clicked
       </button>
       <button onClick={()=> setUpdate(update+1)}>
       setUpdate {update} times clicked
       </button>
       <button onClick={props.fetchData()}>
         fetchTodoData
       </button>
       <button onClick={props.user}> change User in Child Component</button>
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
    user: () => dispatch({type:'Authenticated',val:'praveen1234'}),
    fetchData: () => dispatch(fetchData())

  }
}
export default connect(mapStateToProps,mapDispatchTOProps)(StateInFunctionalComponent);