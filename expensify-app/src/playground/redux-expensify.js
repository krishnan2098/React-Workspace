import { createStore, combineReducers } from 'redux';

// REDUCERS SHOULD
// 1. BE PURE FUNCTIONS NOT HAVING THEIR SCOPRE LIMITED TO THE FUNCTION ITSELF
// 2. IT SHOULD NOT CHANGE THE STATE. RATHER IT SHOULD ACCESS THE STATE

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSES
// SET-TEXT-FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// EXPENSES_REDUCER

const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch( action.type ) {
        default:
            return state;
    }
};

// filter reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = ( state = filterReducerDefaultState, action ) => {
    switch( action.type ) {
        default:
            return state;
    }
};

// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

console.log( store.getState() );

const demoState = {
    expenses: [{
        id: 'adfvlndfvasdf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};