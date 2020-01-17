
import axios from 'axios';
const initialState = {
    user: 'Guest',
    todo:{},
    err: {}
}

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case 'Authenticated': 
          newState.user = action.val;
          break;
        case 'Add_Todo':
         newState.todo = action.val;
         break;
        case 'Error-Todo': 
          newState.err = action.val;
          break;
    }
    // if(action.type === 'Authenticated') {
    //     newState.user = action.val;
    // }
    // if(action.type === 'Add_Todo') {
    //     newState.todo = action.val
    // }
    return newState;
}

const fetchTodoData = data =>{
    return {
        type: 'Add_Todo',
        val: data
    }
}

const errorTodoData = data =>{
    return {
        type: 'Error-Todo',
        val: data
    }
}
export const fetchData = () =>{
    return (dispatch) =>{
        dispatch(fetchData)
         axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
            dispatch(fetchTodoData(response.data));
        }).catch((err)=>{
           dispatch(errorTodoData(err));
        });
    }
}

export default myReducer;