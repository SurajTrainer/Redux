// Cheet Sheet
/*
1. npm init -y
2. npm install redux 
3. import in node const redux = require('redux') 
4. We need to set up all 4 basic things :
 1. Reducer
 2. Store
 3. Subscriber
 4. Actions

5. Node redux-demo.js command to run node server
*/

const redux = require('redux')

const INITIAL_VALUE = {
    counter : 0
}

const reducer = (store = INITIAL_VALUE, action) => {

    let newStore = store;

    if (action.type === 'INCREMENT') {
        newStore = {counter :  store.counter + 1};
    }else  if (action.type === 'DECREMENT') {
        newStore = {counter :  store.counter - 1};
    }else  if (action.type === 'ADDITION') {
        newStore = {counter :  store.counter + action.payload.number};
    }
    // console.log('reducer called', action);
    return newStore;  
} 

const store = redux.createStore(reducer)

const subcriber = () => {
    const state = store.getState()
    console.log(state);
}

store.subscribe(subcriber)

store.dispatch({type : 'INCREMENT'});
store.dispatch({type : 'DECREMENT'});
store.dispatch({type : 'INCREMENT'});
store.dispatch({type : 'ADDITION', payload : {number : 12}});
store.dispatch({type : 'INCREMENT'});