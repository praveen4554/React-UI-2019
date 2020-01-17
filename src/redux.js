const { createStore } = require('redux');
const initialState = {
    user: 'Guest'
}

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'Authenticated') {
        newState.user = action.val;
    }
    return newState;
}

const store = createStore(myReducer);

store.subscribe(()=>{
    console.log('new State', store.getState());
});
console.log(store.getState());
store.dispatch({type:'Authenticated',val:'praveen'});
console.log('after dispatch', store.getState());
store.dispatch({type:'Authenticated',val:'praveen123'});