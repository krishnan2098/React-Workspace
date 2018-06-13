import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// REDUCERS SHOULD
// 1. BE PURE FUNCTIONS NOT HAVING THEIR SCOPRE LIMITED TO THE FUNCTION ITSELF
// 2. IT SHOULD NOT CHANGE THE STATE. RATHER IT SHOULD ACCESS THE STATE

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
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
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
                ];
        case 'REMOVE_EXPENSE' :
            return state.filter(({ id }) => id !== action.id );
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

store.subscribe(() => {
    console.log( store.getState() );
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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

// const user = {
//     name: 'Jen',
//     age: 24
// };
//
// console.log({
//     age: 27,
//     ...user,
//     location: 'Philadelphia'
//
// });