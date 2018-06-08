import { createStore } from 'redux';

const store = createStore((state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };

        case 'DECREMENT':
            return {
                count: state.count - 1
            };

        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;
    }
});

console.log(store.getState());

//ACTION OBJECT FOR INCREMENTING
const increment = {
    type: 'INCREMENT'
};

//ACTION OBJECT FOR DECREMENTING
const decrement = {
    type: 'DECREMENT'
};

//ACTION OBJECT FOR RESETING
const reset = {
    type: 'DECREMENT'
};

//send action to store to change the state
store.dispatch(increment);
store.dispatch(reset);
store.dispatch(decrement);

console.log(store.getState());