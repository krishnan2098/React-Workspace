import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Routers/AppRouter';
// Redux Store import
import configureStore from './store/configureStore';
//Redux action generators import
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
//Redux Selectors import
import getVisibleExpenses from './selectors/expenses';

import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill' }));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('Bill'))
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));