import { createStore, combineReducers } from 'redux';

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
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};